import { TestBed } from '@angular/core/testing';

import { BidirectionalService } from './bidirectional.service';

describe('BidirectionService', () => {
    let service: BidirectionalService;

    beforeEach(() => {
        void TestBed.configureTestingModule({});
        service = TestBed.inject(BidirectionalService);
    });

    it('should be created', () => {
        void expect(service).toBeTruthy();
    });

    it('should return true if the language is Arabic', () => {
        void expect(service.isRTL('AR')).toBe(true);
        void expect(service.isRTL('EN')).toBe(false);
    });
});
