import { InjectionToken } from '@angular/core';


/* tslint:disable */
export type McDateFormats = {
    parse: {
        dateInput: any
    },
    display: {
        dateInput: any,
        monthYearLabel: any
    }
}


export const MC_DATE_FORMATS = new InjectionToken<McDateFormats>('mc-date-formats');
