import { Pipe, PipeTransform } from '@angular/core';
import * as PXBColors from '@pxblue/colors';

@Pipe({ name: 'color' })
export class ColorPipe implements PipeTransform {
    transform(value: number): string {
        if (value < 25) {
            return PXBColors.red[500];
        }
        if (value < 70) {
            return PXBColors.yellow[500];
        }
        return PXBColors.green[500];
    }
}
