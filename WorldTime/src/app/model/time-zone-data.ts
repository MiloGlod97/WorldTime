import { ITimeZoneData } from './itime-zone-data';

export class TimeZoneData{

    datetime: Date;
    timeZone: string;

    constructor(data: ITimeZoneData){
        this.datetime = new Date(data.datetime.slice(0, -6));
        this.timeZone = data.timezone.replace(/\/|_/g,' '); 
    }
}