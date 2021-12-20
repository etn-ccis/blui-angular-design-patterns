import { NgModule } from '@angular/core';
import { InfoListItemModule, SpacerModule, EmptyStateModule } from '@brightlayer-ui/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DynamicStepperComponent } from './dynamic-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

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
        MatTooltipModule,
    ],
    declarations: [DynamicStepperComponent],
})
export class DynamicStepperModule {}
