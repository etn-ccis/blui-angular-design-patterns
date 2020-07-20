import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';
import { HeroModule, ChannelValueModule, InfoListItemModule } from '@pxblue/angular-components';
import { ContentLoaderModule } from '@netbasal/ngx-content-loader';
import { LoadingStatesComponent } from './loading-states.component';
import { PlaceholderCardComponent } from './components/placeholder-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { IconPipe } from './pipes/icon.pipe';
import { GradePipe } from './pipes/grade.pipe';
import { ColorPipe } from './pipes/color.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FlexLayoutModule,
        FormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        ContentLoaderModule,
        MatCardModule,
        MatGridListModule,
        HeroModule,
        MatIconModule,
        NgProgressIconsModule,
        ChannelValueModule,
        InfoListItemModule,
    ],
    declarations: [IconPipe, GradePipe, ColorPipe, LoadingStatesComponent, PlaceholderCardComponent],
})
export class LoadingStatesModule {}
