import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { SampleTranslation } from '../translations/sample-translation';
import { english } from '../translations/english';
import { spanish } from '../translations/spanish';
import { german } from '../translations/german';
import { portuguese } from '../translations/portuguese';
import { chinese } from '../translations/chinese';
import { arabic } from '../translations/arabic';
import { french } from '../translations/french';
import { Injectable } from '@angular/core';
import { LanguageCode } from './bidirectional.service';

@Injectable({
    providedIn: 'root',
})
export class LanguageLoaderService implements TranslateLoader {
    getTranslation(lang: LanguageCode): Observable<SampleTranslation> {
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
