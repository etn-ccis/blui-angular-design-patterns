import {Injectable} from '@angular/core';
import * as PXBColors from '@pxblue/colors';

@Injectable({
    providedIn: 'root'
})
export class InterpreterService {

    interpretIcon(value: number) {
        if (value < 80) {
            return 'A';
        }
        if (value < 90) {
            return 'B';
        }
        return 'C';
    }

    interpretColor(value: number) {
        if (value < 25) {
            return PXBColors.red[500];
        }
        if (value < 70) {
            return PXBColors.yellow[500];
        }
        return PXBColors.green[500];
    }

    interpretGrade(value: number) {
        if (value < 80) {
            return PXBColors.red[500];
        }
        if (value < 90) {
            return PXBColors.yellow[500];
        }
        return PXBColors.green[500];
    }
}
