import { async, inject, TestBed } from '@angular/core/testing';

import { JAN } from '../testing/month-constants';

import { DateAdapter, NativeDateAdapter, NativeDateModule } from './index';


/* tslint:disable:no-magic-numbers */
describe('NativeDateAdapter', () => {

    let adapter: NativeDateAdapter;
    let assertValidDate: (d: Date | null, valid: boolean) => void;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NativeDateModule]
        }).compileComponents();
    }));

    beforeEach(inject([DateAdapter],
        (dateAdapter: NativeDateAdapter) => {
        adapter = dateAdapter;

        assertValidDate = (d: Date | null, valid: boolean) => {
            expect(adapter.isDateInstance(d)).not.toBeNull(`Expected ${d} to be a date instance`);
            expect(adapter.isValid(d!)).toBe(valid,
                `Expected ${d} to be ${valid ? 'valid' : 'invalid'},` +
                ` but was ${valid ? 'invalid' : 'valid'}`);
        };
    }));

    it('should get year', () => {
        expect(adapter.getYear(new Date(2017, JAN, 1))).toBe(2017);
    });

    it('should get month', () => {
        expect(adapter.getMonth(new Date(2017, JAN, 1))).toBe(0);
    });

    it('should get date', () => {
        expect(adapter.getDate(new Date(2017, JAN, 1))).toBe(1);
    });

    it('should get day of week', () => {
        expect(adapter.getDayOfWeek(new Date(2017, JAN, 1))).toBe(0);
    });

    it('should get first day of week', () => {
        expect(adapter.getFirstDayOfWeek()).toBe(0);
    });

    it('should create Date', () => {
        expect(adapter.createDate(2017, JAN, 1)).toEqual(new Date(2017, JAN, 1));
    });

    it('should parse string', () => {
        expect(adapter.parse('1/1/2017')).toEqual(new Date(2017, JAN, 1));
    });

    it('should parse number', () => {
        const timestamp = new Date().getTime();
        expect(adapter.parse(timestamp)).toEqual(new Date(timestamp));
    });

    it('should parse Date', () => {
        const date = new Date(2017, JAN, 1);
        expect(adapter.parse(date)).toEqual(date);
        expect(adapter.parse(date)).not.toBe(date);
    });

    it('should format', () => {
        expect(adapter.format(new Date(2017, JAN, 1), {})).toEqual('1/1/2017');
    });

    it('should format: absoluteLongDate', () => {
        adapter.setLocale('ru-RU');
        expect(adapter.format(new Date(2017, JAN, 1), { day: 'numeric', month: 'long' }))
            .toEqual('1 января');

        adapter.setLocale('en-EN');
        expect(adapter.format(new Date(2017, JAN, 1), { day: 'numeric', month: 'long' }))
            .toEqual('January 1');
    });

    it('should format: absoluteLongDateOtherYear', () => {
        adapter.setLocale('ru-RU');
        expect(adapter.format(new Date(2015, JAN, 1), {day: 'numeric', month: 'long', year: 'numeric'}))
            .toEqual('1 января 2015 г.');
    });

    it('should format: absoluteLongDateTimeOtherYear', () => {
        adapter.setLocale('ru-RU');

        const displayFormat = {
            day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric',
            // need for en-EN
            hour12: false
        };

        expect(adapter.format(new Date(2015, JAN, 1, 18, 14), displayFormat))
            .toEqual('1 января 2015 г., 18:14');

        adapter.setLocale('en-EN');
        expect(adapter.format(new Date(2015, JAN, 1, 18, 14), displayFormat))
            .toEqual('January 1, 2015, 18:14');
    });
});
