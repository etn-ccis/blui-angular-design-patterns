import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keyValue',
})
export class ObjectToList implements PipeTransform {
    transform(obj, args?: string[]): any {
        const list = [];
        for (const key in obj) {
            list.push({ key: key, value: obj[key] });
        }
        return list;
    }
}
