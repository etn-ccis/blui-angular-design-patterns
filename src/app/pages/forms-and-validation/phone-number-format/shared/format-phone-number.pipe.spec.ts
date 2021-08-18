import { FormatPhoneNumberPipe } from './format-phone-number.pipe';

describe('FormatPhoneNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatPhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
