import { FormatPhoneNumberPipe } from './format-phone-number.pipe';

describe('FormatPhoneNumberPipe', () => {
    const pipe = new FormatPhoneNumberPipe();
    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('format phone number as per US country', () => {
        expect(pipe.transform('1234567890', 'US')).toBe('123 456 7890');
    });

    it('format phone number as per CA country while typing', () => {
        expect(pipe.transform('123456', 'CA')).toBe('123 456');
    });

    it('format phone number as per EG country', () => {
        expect(pipe.transform('12345678', 'EG')).toBe('1 2345678');
    });
});
