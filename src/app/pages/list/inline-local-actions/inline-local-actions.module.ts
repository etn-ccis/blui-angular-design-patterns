import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InfoListItemModule, ScoreCardModule, HeroModule } from '@brightlayer-ui/angular-components';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { InlineLocalActionsComponent } from './inline-local-actions.component';
import { SlidePanelComponent } from './slide-panel/slide-panel.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { LocalActionsDialogComponent } from './local-actions-dialog/local-actions-dialog.component';
import { DeviceEditMobileComponent } from './device-edit-mobile/device-edit-mobile.component';
import { LanguageListComponent } from './language-list/language-list.component';
@NgModule({
    declarations: [
        InlineLocalActionsComponent,
        SlidePanelComponent,
        ScorecardComponent,
        DeviceEditMobileComponent,
        LocalActionsDialogComponent,
        LanguageListComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSlideToggleModule,
        InfoListItemModule,
        MatInputModule,
        ScoreCardModule,
        HeroModule,
        MatDialogModule,
    ],
})
export class InlineLocalActionsModule {}
