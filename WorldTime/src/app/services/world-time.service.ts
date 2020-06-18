import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITimeZoneData } from '../model/itime-zone-data';
import { TimeZoneData } from '../model/time-zone-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorldTimeService {

  apiUrl: string = "http://worldtimeapi.org/api/";

  constructor(private http: HttpClient) { }

  getTimeZoneTime(timeZone: string): Observable<TimeZoneData>{
    return this.http.get<ITimeZoneData>(this.apiUrl + "timezone/" + timeZone)
      .pipe(
        map((data: ITimeZoneData) => {
          return new TimeZoneData(data);
        })
      );
  }
}
