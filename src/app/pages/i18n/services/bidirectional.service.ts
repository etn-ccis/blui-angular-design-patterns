import { Injectable } from '@angular/core';
import {SampleTranslation} from "../translations/sample-translation";

export type LANGUAGE_CODE = keyof SampleTranslation['LANGUAGES'];

@Injectable({
    providedIn: 'root',
})
export class BidirectionalService {
    private currentLanguage: LANGUAGE_CODE;

    changeDirectionality(lang: LANGUAGE_CODE): void {
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

    isRTL(lang: LANGUAGE_CODE): boolean {
        return String(lang).toUpperCase() === 'AR';
    }

    getCurrentLanguage(): LANGUAGE_CODE {
        return this.currentLanguage;
    }

    setCurrentLanguage(lang: LANGUAGE_CODE): void {
        this.currentLanguage = lang;
    }
}
