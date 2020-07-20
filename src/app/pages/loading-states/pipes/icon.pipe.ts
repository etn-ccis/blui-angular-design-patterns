import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'icon' })
export class IconPipe implements PipeTransform {
    transform(value: number): string {
        if (value < 80) {
            return 'A';
        }
        if (value < 90) {
            return 'B';
        }
        return 'C';
    }
}
