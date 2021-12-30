import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InfoListItemModule, ScoreCardModule } from '@brightlayer-ui/angular-components';
import { MatInputModule } from '@angular/material/input';
import { InlineLocalActionsComponent } from './inline-local-actions.component';
import { SlidePanelComponent } from './slide-panel/slide-panel.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
@NgModule({
    declarations: [InlineLocalActionsComponent, SlidePanelComponent, ScorecardComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
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
    ],
})
export class InlineLocalActionsModule {}
