import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorldTimeService } from '../services/world-time.service';
import { TimeZoneData } from '../model/time-zone-data';

@Component({
  selector: 'app-display-time',
  templateUrl: './display-time.component.html',
  styleUrls: ['./display-time.component.scss']
})
export class DisplayTimeComponent implements OnInit {

  timeZone: string;
  timeZoneData: TimeZoneData;
  currentTime: Date;

  constructor(private route: ActivatedRoute, private wts: WorldTimeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.timeZone = params['timezone']);
    this.route.url.subscribe(url => {
      this.wts.getTimeZoneTime(this.timeZone).subscribe((data) => {
        this.timeZoneData = data;
        this.currentTime = this.timeZoneData.datetime;
      });
    });
    this.setCurrentTime();
  }

  setCurrentTime(){
    setInterval(() => {
      if(this.timeZoneData != undefined){
        this.currentTime = new Date(this.currentTime.getTime()+1000);
      }
    }, 1000)
  }
}
