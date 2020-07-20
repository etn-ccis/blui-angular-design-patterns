import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'icon' })
export class IconPipe implements PipeTransform {
    transform(value: number): string {
        if (value < 80) {
            return 'px-icons:grade_a';
        }
        if (value < 90) {
            return 'px-icons:grade_b';
        }
        return 'px-icons:grade_c';
    }
}
