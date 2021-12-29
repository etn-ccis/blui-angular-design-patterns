import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptDialog } from './prompt-dialog';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
    declarations: [PromptDialog],
    imports: [CommonModule, MatDialogModule],
})
export class PromptDialogModule {}
