import { Component } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { SampleTranslation } from './translations/sample-translation';
import { english } from './translations/english';
import { BidirectionalService } from './services/bidirectional.service';
import * as Colors from '@pxblue/colors';
import { StateService } from '../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
    selector: 'app-i18n',
    templateUrl: './i18n.component.html',
    styleUrls: ['./i18n.component.scss'],
})
export class I18nComponent {
    open = false;
    colors = Colors;
    enabledLocales: Array<keyof SampleTranslation['LANGUAGES']> = ['EN', 'ES', 'FR', 'DE', 'PT', 'ZH', 'AR'];
    selectedLanguage: string;
    selectedFruits = new Set<string>();
    fruits = Object.keys(english.FRUITS);
    isSmall: boolean;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly bidirectionalService: BidirectionalService,
        public translate: TranslateService
    ) {
        translate.addLangs(this.enabledLocales);
        translate.setDefaultLang('EN');
        this.selectedLanguage = this.enabledLocales[0];
        this.listenForLanguageChanges();
    }

    ngOnInit(): void {
        this._breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Handset])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.isSmall = true;
                } else {
                    this.isSmall = false;
                }
            });
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    openI18nMenu(): void {
        this.open = !this.open;
    }

    // Return false to stop event propagation
    toggleFruit(fruit: string): boolean {
        this.selectedFruits.has(fruit) ? this.selectedFruits.delete(fruit) : this.selectedFruits.add(fruit);
        return false;
    }

    cancelItems(): void {
        this.selectedFruits.clear();
    }

    listenForLanguageChanges(): void {
        this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
            this.bidirectionalService.changeDirectionality(event.lang);
        });
    }
}
