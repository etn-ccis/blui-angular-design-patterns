import { TestBed } from '@angular/core/testing';
import * as PXBColors from '@pxblue/colors';
import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
    let pipe: GradePipe;

    beforeEach(() => {
        void TestBed.configureTestingModule({});
        pipe = new GradePipe();
    });

    it('should be created', () => {
        void expect(pipe).toBeTruthy();
    });

    it('should return red if the value is less than 80', () => {
        void expect(pipe.transform(79)).toEqual(PXBColors.red[500]);
        void expect(pipe.transform(80)).not.toEqual(PXBColors.red[500]);
    });
});
