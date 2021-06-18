import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from './skeleton-loader.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
    SpacerModule,
    HeroModule,
    ScoreCardModule,
    InfoListItemModule,
    ListItemTagModule,
    ChannelValueModule,
} from '@pxblue/angular-components';
import { MatCardModule } from '@angular/material/card';
import { ContentLoaderModule } from '@netbasal/ngx-content-loader';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { PlaceholderHeroComponent } from './components/placeholder-hero/placeholder-hero.component';
import { PlaceholderScoreCardComponent } from './components/placeholder-score-card/placeholder-score-card.component';
import { PlaceholderListComponent } from './components/placeholder-list/placeholder-list.component';
@NgModule({
    declarations: [
        SkeletonLoaderComponent,
        PlaceholderHeroComponent,
        PlaceholderScoreCardComponent,
        PlaceholderListComponent,
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        SpacerModule,
        MatSlideToggleModule,
        ContentLoaderModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        ScoreCardModule,
        HeroModule,
        InfoListItemModule,
        ListItemTagModule,
        ChannelValueModule,
    ],
})
export class SkeletonLoaderModule {}
