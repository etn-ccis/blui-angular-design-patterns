import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'unCamelCase',
})
export class UnCamelCasePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return value
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
            .replace(/^./, (str) => str.toUpperCase());
    }
}
