import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        return items.filter(
            (it) =>
                it.president.toLowerCase().includes(searchText.toLowerCase()) ||
                it.party.toLowerCase().includes(searchText.toLowerCase()) ||
                it.tookOffice.toLowerCase().includes(searchText.toLowerCase())
        );
    }
}
