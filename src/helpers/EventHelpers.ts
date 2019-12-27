import {EventType} from "../global/EventType";
import moment from "moment";

export function sameDay(dateOne : any, dateTwo : any) : boolean {
    const a = moment(dateOne);
    const b = moment(dateTwo);
    const dateDiff = b.diff(a, 'days');
    const daysLeft = dateDiff !== null && !isNaN(dateDiff) ? dateDiff : 0;
    console.log(a.hours());
    return daysLeft === 0 || (daysLeft === 1 && (a.hours() === 1 && b.hours() === 1));
}

export function getTypeIcon(type : string) : string {
    switch(type) {
        case EventType.FROESCHLI:
            return "frog";
        case EventType.JUNGSCHAR:
            return "fire";
        case EventType.GENERAL:
            return "calendar-day";
        case EventType.HOLIDAY:
            return "globe-europe";
        default:
            return "calendar-day";
    }
}