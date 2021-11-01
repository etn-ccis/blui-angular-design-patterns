import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], day: number): any[] {
        if (!items) {
            return [];
        }
        if (!day) {
            return items;
        }
        return items.filter((item) => item.value <= day);
    }
}
