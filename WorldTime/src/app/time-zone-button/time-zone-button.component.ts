import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-zone-button',
  templateUrl: './time-zone-button.component.html',
  styleUrls: ['./time-zone-button.component.scss']
})
export class TimeZoneButtonComponent implements OnInit {

  @Input() timeZone: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get cityName(): string{
    return this.timeZone.split('/')[1].replace('_',' ');
  }

  getTime(timeZone: string){
    this.router.navigate(['time/', timeZone]);
  }
}
