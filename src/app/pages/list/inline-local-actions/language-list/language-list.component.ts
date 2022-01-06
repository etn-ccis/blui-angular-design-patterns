import { Component, Input, Output, EventEmitter } from '@angular/core';

type LanguageItem = {
    id: string;
    language: string;
};
@Component({
    selector: 'app-language-list',
    templateUrl: './language-list.component.html',
    styleUrls: ['./language-list.component.scss'],
})
export class LanguageListComponent {
    @Input() selectedLanguage = '';
    @Output() newSelectedLanguage = new EventEmitter<string>();

    languageList: LanguageItem[] = [
        { id: 'Deutsch (Germany)', language: 'Deutsch' },
        { id: 'English (United States)', language: 'English (U.S.)' },
        { id: 'Español (Spain)', language: 'Español (ES)' },
        { id: 'Français (France)', language: 'Français (FR)' },
    ];

    updateLanguage(language: string): void {
        this.newSelectedLanguage.emit(language);
    }
}
