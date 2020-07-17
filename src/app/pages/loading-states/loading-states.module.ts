import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';
import { HeroModule, ChannelValueModule } from '@pxblue/angular-components';
import { ContentLoaderModule } from '@netbasal/ngx-content-loader';
import { LoadingStatesComponent } from './loading-states.component';
import { PlaceholderCardComponent } from './components/placeholder-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

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
        HttpClientModule,
        NgProgressIconsModule,
        ChannelValueModule,
    ],
    declarations: [LoadingStatesComponent, PlaceholderCardComponent],
})
export class LoadingStatesModule {}
