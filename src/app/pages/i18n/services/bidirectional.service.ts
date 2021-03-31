import { Injectable } from '@angular/core';
import { SampleTranslation } from '../translations/sample-translation';

export type LanguageCode = keyof SampleTranslation['LANGUAGES'];

@Injectable({
    providedIn: 'root',
})
export class BidirectionalService {
    private currentLanguage: LanguageCode;

    changeDirectionality(lang: LanguageCode): void {
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

    isRTL(lang: LanguageCode): boolean {
        return String(lang).toUpperCase() === 'AR';
    }

    getCurrentLanguage(): LanguageCode {
        return this.currentLanguage;
    }

    setCurrentLanguage(lang: LanguageCode): void {
        this.currentLanguage = lang;
    }
}
