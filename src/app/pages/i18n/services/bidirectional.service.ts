import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BidirectionalService {
    changeDirectionality(lang: string): void {
        const body = document.querySelector('.i18n-container');
        body.setAttribute('dir', this.isRTL(lang) ? 'rtl' : 'ltr');
    }

    isRTL(lang: string): boolean {
        return lang.toUpperCase() === 'AR';
    }
}
