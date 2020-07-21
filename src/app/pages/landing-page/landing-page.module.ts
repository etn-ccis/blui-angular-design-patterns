import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LandingPageComponent } from './landing-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, FlexLayoutModule],
    declarations: [LandingPageComponent],
})
export class LandingPageModule {}
