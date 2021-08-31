import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';

type DataItem = {
    name: string;
    min: number;
    max: number;
};

@Component({
    selector: 'app-in-a-table',
    templateUrl: './in-a-table.component.html',
    styleUrls: ['./in-a-table.component.scss'],
})
export class InATableComponent implements OnInit {
    isSmall = false;
    isXsSmall = false;
    data: DataItem[] = [];
    form: FormGroup;
    displayedColumns = ['id', 'name', 'min', 'max'];
    dataSource: MatTableDataSource<AbstractControl>;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _fb: FormBuilder
    ) {
        this.createForm();
        this.addRow();
        this.dataSource = new MatTableDataSource(this.tableControlArray.controls);
    }

    ngOnInit(): void {
        this._breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Handset])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.isSmall = true;
                } else {
                    this.isSmall = false;
                }
                this.isXsSmall = state.breakpoints['(max-width: 599.98px)'];
            });
    }

    get tableControlArray(): FormArray {
        return this.form.get('tableExample') as FormArray;
    }

    createForm(): void {
        this.form = this._fb.group({
            tableExample: this._fb.array([]),
        });
    }

    addRow(): void {
        const rows = this.tableControlArray;
        this.data = [
            {
                name: 'Power',
                min: 123,
                max: 456,
            },
            {
                name: 'Xpert',
                min: 123,
                max: 456,
            },
            {
                name: 'Blue',
                min: 123,
                max: 456,
            },
        ];

        this.data.map((element) => {
            rows.push(
                this._fb.group({
                    name: [element.name, Validators.required],
                    min: [element.min, Validators.required],
                    max: [element.max, Validators.required],
                })
            );
        });
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
