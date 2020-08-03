import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { SampleTranslation } from './translations/sample-translation';
import { BidirectionalService } from './services/bidirectional.service';
import { StateService } from '../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar.component';
import { FruitService, Fruit } from './services/fruit.service';

@Component({
    selector: 'app-i18n',
    templateUrl: './i18n.component.html',
    styleUrls: ['./i18n.component.scss'],
})
export class I18nComponent implements OnInit, OnDestroy {
    open = false;
    enabledLocales: Array<keyof SampleTranslation['LANGUAGES']> = ['EN', 'ES', 'FR', 'DE', 'PT', 'ZH', 'AR'];
    selectedLanguage: string;
    selectedFruits: Set<string>;
    fruits: Fruit[];
    isSmall: boolean;
    snackbarOpen = false;
    rtl = false;
    todayDate: Date = new Date();

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _bidirectionalService: BidirectionalService,
        private readonly _fruitService: FruitService,
        private readonly _snackBar: MatSnackBar,
        public translate: TranslateService
    ) {
        const defaultLanguage = 'EN';
        translate.addLangs(this.enabledLocales);
        translate.setDefaultLang(defaultLanguage);
        this._bidirectionalService.setCurrentLanguage(defaultLanguage);
        this.selectedLanguage = this.enabledLocales[0];
        this.listenForLanguageChanges();
        this.listenForFruitSelectionChanges();
    }

    ngOnInit(): void {
        this.fruits = this._fruitService.fruits;
        this.selectedFruits = this._fruitService.selectedFruits;
        this._breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Handset])
            .subscribe((state: BreakpointState) => {
                this.isSmall = state.matches;
            });
    }

    ngOnDestroy(): void {
        this.hideSnackBar();
    }

    toggleMenu(): void {
        this._drawerService.setDrawerOpen(!this._drawerService.getDrawerOpen());
    }

    toggleI18nMenu(): void {
        this.open = !this.open;
    }

    // Return false to stop propagation
    toggleFruit(fruit: string): boolean {
        this._fruitService.toggleFruit(fruit);
        return false;
    }

    showSnackBar(): void {
        if (!this.snackbarOpen) {
            this.snackbarOpen = true;
            this._snackBar.openFromComponent(SnackBarComponent);
        }
    }

    hideSnackBar(): void {
        this.snackbarOpen = false;
        this._snackBar.dismiss();
    }

    listenForLanguageChanges(): void {
        this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
            this._bidirectionalService.changeDirectionality(event.lang);
            this.rtl = this._bidirectionalService.isRTL(this._bidirectionalService.getCurrentLanguage());
        });
    }

    listenForFruitSelectionChanges(): void {
        this._fruitService.fruitSelectionObs.subscribe((selected: number) => {
            if (selected === 0) {
                this.hideSnackBar();
            } else {
                this.showSnackBar();
            }
        });
    }
}
