import { Component, OnInit } from '@angular/core';
import { TimeZones } from '../model/time-zones.enum';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  timeZones: string[] = Object.values(TimeZones).filter((timeZone) => typeof (timeZone) === 'string');
  constructor() { }

  ngOnInit(): void {
  }

}
