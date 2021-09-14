import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'boldSearch',
})
export class BoldSearchPipe implements PipeTransform {
    transform(item: string, searchText: string): string {
        if (searchText) {
          const re = new RegExp(searchText,"gi");
          return item.replace(re, '<strong>$&</strong>');
        }
        return item;
    }
}
