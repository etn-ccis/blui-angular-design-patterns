import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatPhoneNumber',
})
export class FormatPhoneNumberPipe implements PipeTransform {
    transform(value: string, country: string): string {
        let phoneNumber = value.replace(/\s/g, '');
        switch (country) {
            case 'RU': {
                if (phoneNumber.length > 3 && phoneNumber.length <= 6)
                    phoneNumber = `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
                else if (phoneNumber.length > 6 && phoneNumber.length <= 8)
                    phoneNumber = `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6)}`;
                else if (phoneNumber.length > 8)
                    phoneNumber = `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(
                        6,
                        8
                    )} ${phoneNumber.slice(8)}`;
                return phoneNumber;
            }
            case 'EG': {
                if (phoneNumber.length > 1) phoneNumber = `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1)}`;
                return phoneNumber;
            }
            case 'IN': {
                if (phoneNumber.length > 4 && phoneNumber.length <= 7)
                    phoneNumber = `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4)}`;
                else if (phoneNumber.length > 7)
                    phoneNumber = `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)}`;
                return phoneNumber;
            }
            case 'US':
            case 'CA':
            default: {
                if (phoneNumber.length > 3 && phoneNumber.length <= 6)
                    phoneNumber = `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
                else if (phoneNumber.length > 6)
                    phoneNumber = `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6)}`;
                return phoneNumber;
            }
        }
    }
}
