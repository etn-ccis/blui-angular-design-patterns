import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BidirectionalService {
    private currentLanguage: string;

    changeDirectionality(lang: string): void {
        this.setCurrentLanguage(lang);
        const container = document.querySelector('.app-content');
        // App Container
        if (container) {
            container.setAttribute('dir', this.isRTL(lang) ? 'rtl' : 'ltr');
        }

        // Snackbar
        const overlay = document.querySelector('.cdk-global-overlay-wrapper');
        if (overlay) {
            overlay.setAttribute('dir', this.isRTL(lang) ? 'rtl' : 'ltr');
        }
    }

    isRTL(lang: string): boolean {
        return lang.toUpperCase() === 'AR';
    }

    getCurrentLanguage(): string {
        return this.currentLanguage;
    }

    setCurrentLanguage(lang: string): void {
        this.currentLanguage = lang;
    }
}
