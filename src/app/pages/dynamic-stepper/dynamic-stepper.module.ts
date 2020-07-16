import { NgModule } from '@angular/core';
import { InfoListItemModule, SpacerModule, EmptyStateModule } from '@pxblue/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DynamicStepperComponent } from './dynamic-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        InfoListItemModule,
        MatToolbarModule,
        SpacerModule,
        MatIconModule,
        MatButtonModule,
        MatStepperModule,
        MatRadioModule,
        BrowserAnimationsModule,
        EmptyStateModule,
    ],
    declarations: [DynamicStepperComponent],
})
export class DynamicStepperModule {}
