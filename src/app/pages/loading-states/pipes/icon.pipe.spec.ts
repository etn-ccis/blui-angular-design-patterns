import { TestBed } from '@angular/core/testing';
import { IconPipe } from './icon.pipe';

describe('IconPipe', () => {
    let pipe: IconPipe;

    beforeEach(() => {
        void TestBed.configureTestingModule({});
        pipe = new IconPipe();
    });

    it('should be created', () => {
        void expect(pipe).toBeTruthy();
    });

    it("should return 'A' if the value is less than 80", () => {
        void expect(pipe.transform(79)).toBe('A');
        void expect(pipe.transform(80)).not.toBe('A');
    });
});
