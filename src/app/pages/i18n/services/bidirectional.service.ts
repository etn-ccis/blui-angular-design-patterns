import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BidirectionalService {
    changeDirectionality(lang: string): void {
        const container = document.querySelector('.app-content');
        container.setAttribute('dir', this.isRTL(lang) ? 'rtl' : 'ltr');
    }

    isRTL(lang: string): boolean {
        return lang.toUpperCase() === 'AR';
    }
}
