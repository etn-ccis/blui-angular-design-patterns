import { Component } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { SampleTranslation } from './i18n/sample-translation';
import { english } from './i18n/english';
import { BidirectionalService } from './services/bidirectional.service';
import * as Colors from '@pxblue/colors';

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

  constructor(public translate: TranslateService, private readonly bidirectionalService: BidirectionalService) {
    translate.addLangs(this.enabledLocales);
    translate.setDefaultLang('EN');
    this.selectedLanguage = this.enabledLocales[0];
    this.listenForLanguageChanges();
  }

  toggleMenu(): void {
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
