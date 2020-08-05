import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguageLoaderService } from './services/language-loader.service';
import { I18nComponent } from './i18n.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InfoListItemModule } from '@pxblue/angular-components';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackBarComponent } from './snack-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';
import localePt from '@angular/common/locales/pt';
import localeZh from '@angular/common/locales/zh';
import localeAr from '@angular/common/locales/ar';
registerLocaleData(localeFr);
registerLocaleData(localeDe);
registerLocaleData(localeEs);
registerLocaleData(localePt);
registerLocaleData(localeZh);
registerLocaleData(localeAr);

@NgModule({
    declarations: [I18nComponent, SnackBarComponent],
    imports: [
        MatSnackBarModule,
        BrowserAnimationsModule,
        BrowserModule,
        FlexLayoutModule,
        FormsModule,
        LayoutModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatIconModule,
        InfoListItemModule,
        MatMenuModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTooltipModule,
        TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useClass: LanguageLoaderService },
            defaultLanguage: 'EN',
        }),
    ],
})
export class I18nModule {}
