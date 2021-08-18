import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhoneNumber'
})
export class FormatPhoneNumberPipe implements PipeTransform {


  // india phone number format #### ### ### 4-3-3
  transform(value: string, country: string) {
    value = value.replace(/\s/g, '');
    switch (country) {
      case 'US': {
      if(value.length > 3 && value.length <= 6) 
        value = value.slice(0,3) + " " + value.slice(3);
      else if(value.length > 6) 
        value = value.slice(0,3) + " " + value.slice(3,6) + " " + value.slice(6);
      }
      return value;
      case 'CA': {
        if (value.length > 3 && value.length <= 6)
          value = value.slice(0, 3) + " " + value.slice(3);
        else if (value.length > 6)
          value = value.slice(0, 3) + " " + value.slice(3, 6) + " " + value.slice(6);
        return value;
      }
      case 'RU': {
        if (value.length > 3 && value.length <= 6)
          value = value.slice(0, 3) + " " + value.slice(3);
        else if (value.length > 6 && value.length <= 8)
          value = value.slice(0, 3) + " " + value.slice(3, 6) + ' ' + value.slice(6);
        else if (value.length > 8)
          value = value.slice(0, 3) + " " + value.slice(3, 6) + " " + value.slice(6, 8) + " " + value.slice(8);
          return value;
      }
      case 'EG': {
        if (value.length > 1) {
          value = value.slice(0, 1) + " " + value.slice(1);
          return value;
        }
      }
      case 'IN': {
        if (value.length > 4 && value.length <= 7)
          value = value.slice(0, 4) + " " + value.slice(4);
        else if (value.length > 7)
          value = value.slice(0, 4) + " " + value.slice(4, 7) + " " + value.slice(7);
          return value;
      }

      default: {
        if (value.length > 3 && value.length <= 6)
          value = value.slice(0, 3) + " " + value.slice(3);
        else if (value.length > 6)
          value = value.slice(0, 3) + " " + value.slice(3, 6) + " " + value.slice(6);
          return value;
      }
    }
  }

}
