import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { SampleTranslation } from './translations/sample-translation';
import { english } from './translations/english';
import { BidirectionalService } from './services/bidirectional.service';
import { StateService } from '../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar.component';
import { FruitService } from './services/fruit.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-i18n',
    templateUrl: './i18n.component.html',
    styleUrls: ['./i18n.component.scss'],
})
export class I18nComponent implements OnInit {
    open = false;
    enabledLocales: Array<keyof SampleTranslation['LANGUAGES']> = ['EN', 'ES', 'FR', 'DE', 'PT', 'ZH', 'AR'];
    selectedLanguage: string;
    selectedFruits: Set<string>;
    fruits: string[];
    isSmall: boolean;
    snackbarOpen = false;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly bidirectionalService: BidirectionalService,
        private readonly _fruitService: FruitService,
        private readonly _snackBar: MatSnackBar,
        public translate: TranslateService
    ) {
        translate.addLangs(this.enabledLocales);
        translate.setDefaultLang('EN');
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
                if (state.matches) {
                    this.isSmall = true;
                } else {
                    this.isSmall = false;
                }
            });
    }

    ngOnDestroy(): void {
        this.hideSnackBar();
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    openI18nMenu(): void {
        this.open = !this.open;
    }

    toggleFruit(fruit: string): void {
        this._fruitService.toggleFruit(fruit);
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
            this.bidirectionalService.changeDirectionality(event.lang);
        });
    }

    listenForFruitSelectionChanges(): void {
        this._fruitService.fruitSelectionObs.subscribe((selected: number) => {
            selected === 0 ? this.hideSnackBar() : this.showSnackBar();
        });
    }
}
