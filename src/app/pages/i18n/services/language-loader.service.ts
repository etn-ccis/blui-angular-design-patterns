import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { SampleTranslation } from '../i18n/sample-translation';
import { english } from '../i18n/english';
import { spanish } from '../i18n/spanish';
import { german } from '../i18n/german';
import { portuguese } from '../i18n/portuguese';
import { chinese } from '../i18n/chinese';
import { arabic } from '../i18n/arabic';
import { french } from '../i18n/french';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LanguageLoaderService implements TranslateLoader {
    getTranslation(lang: keyof SampleTranslation['LANGUAGES']): Observable<SampleTranslation> {
        switch (lang) {
            case 'EN': {
                return of(english);
            }
            case 'ES': {
                return of(spanish);
            }
            case 'DE': {
                return of(german);
            }
            case 'PT': {
                return of(portuguese);
            }
            case 'ZH': {
                return of(chinese);
            }
            case 'AR': {
                return of(arabic);
            }
            case 'FR': {
                return of(french);
            }
            default: {
                return of(english);
            }
        }
    }
}
