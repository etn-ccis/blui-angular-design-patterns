import { TestBed } from '@angular/core/testing';
import * as PXBColors from '@pxblue/colors';
import { InterpreterService } from './interpreter.service';

describe('InterpreterService', () => {
    let service: InterpreterService;

    beforeEach(() => {
        void TestBed.configureTestingModule({});
        service = TestBed.get(InterpreterService);
    });

    it('should be created', () => {
        void expect(service).toBeTruthy();
    });

    describe('interpretGrade', () => {
        it('should return red if the value is less than 80', () => {
            void expect(service.interpretGrade(79)).toEqual(PXBColors.red[500]);
            void expect(service.interpretGrade(80)).not.toEqual(PXBColors.red[500]);
        });
    });

    describe('interpretColor', () => {
        it('should return red if the value is less than 25', () => {
            void expect(service.interpretColor(24)).toEqual(PXBColors.red[500]);
            void expect(service.interpretColor(25)).not.toEqual(PXBColors.red[500]);
        });
    });

    describe('interpretIcon', () => {
        it("should return 'A' if the value is less than 80", () => {
            void expect(service.interpretIcon(79)).toBe('A');
            void expect(service.interpretIcon(80)).not.toBe('A');
        });
    });
});
