import { NgModule } from '@angular/core';
import { EmptyStateModule, HeroModule, InfoListItemModule, SpacerModule } from '@brightlayer-ui/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ComplexBottomSheetComponent } from './complex-bottom-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { DataService } from './data.service';
import { BottomSheet } from './bottom-sheet/bottom-sheet';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        InfoListItemModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatBottomSheetModule,
        MatListModule,
        SpacerModule,
        FlexLayoutModule,
        EmptyStateModule,
        HeroModule,
    ],
    declarations: [ComplexBottomSheetComponent, BottomSheet],
    providers: [DataService],
    entryComponents: [BottomSheet],
})
export class ComplexBottomSheetModule {}
