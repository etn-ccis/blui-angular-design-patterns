import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContextualAppBarComponent } from './contextual.component';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule, MatCheckboxModule],
    declarations: [ContextualAppBarComponent],
})
export class ContextualAppbarModule {}
