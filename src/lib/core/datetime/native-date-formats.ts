import { McDateFormats } from './date-formats';


export const MC_NATIVE_DATE_FORMATS: McDateFormats = {
    parse: {
        dateInput: null
    },
    display: {
        dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' }
    }
};
