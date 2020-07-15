import { TestBed } from '@angular/core/testing';

import { BidirectionalService } from './bidirectional.service';

describe('BidirectionService', () => {
    let service: BidirectionalService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BidirectionalService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return true if the language is Arabic', () => {
        expect(service.isRTL('ar')).toBe(true);
        expect(service.isRTL('en')).toBe(false);
    })
});
