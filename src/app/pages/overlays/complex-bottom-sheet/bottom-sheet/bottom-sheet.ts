import { Component, ViewEncapsulation, NgModule, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { InfoListItemModule } from '@pxblue/angular-components';
import { DataService } from '../data.service';
import { FiltersList } from '../filter';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
    selector: 'bottom-sheet',
    templateUrl: './bottom-sheet.html',
    styleUrls: ['./bottom-sheet.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BottomSheet implements OnInit {
    activeFilters: string[];
    filterTypes: any;
    activeSort: string;

    constructor(
        private readonly _bottomSheetRef: MatBottomSheetRef<BottomSheet>,
        private readonly _dataService: DataService
    ) {}

    ngOnInit(): void {
        this.activeFilters = this._dataService.activeFilters;
        this.activeSort = this._dataService.activeSort;
        this.filterTypes = FiltersList;
    }

    openLink(): void {
        this._bottomSheetRef.dismiss();
    }

    filterData(filter: string): void {
        const index = this.activeFilters.indexOf(filter);
        if (index > -1) {
            this.activeFilters.splice(index, 1);
        } else {
            this.activeFilters.push(filter);
        }
        this._dataService.updateFilters(this.activeFilters);
    }

    sortData(sortText: string): void {
        this.activeSort = sortText;
        this._dataService.updateSort(sortText);
    }

    checkActive(filter: string): boolean {
        return this.activeFilters.indexOf(filter) > -1;
    }
}

@NgModule({
    imports: [CommonModule, MatIconModule, MatListModule, InfoListItemModule, MatButtonModule, FlexLayoutModule],
    declarations: [BottomSheet],
    providers: [],
})
export class BottomSheetModule {}
