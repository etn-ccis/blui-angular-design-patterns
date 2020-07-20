import { Pipe, PipeTransform } from '@angular/core';
import * as PXBColors from '@pxblue/colors';

@Pipe({ name: 'grade' })
export class GradePipe implements PipeTransform {
    transform(value: number): string {
        if (value < 80) {
            return PXBColors.red[500];
        }
        if (value < 90) {
            return PXBColors.yellow[500];
        }
        return PXBColors.green[500];
    }
}
