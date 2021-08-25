import {
  Component,
  OnInit,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';

type DataItem = {
  id: number;
  name: string;
  min: number;
  max: number;
};

@Component({
  selector: 'app-in-a-table',
  templateUrl: './in-a-table.component.html',
  styleUrls: ['./in-a-table.component.scss']
})
export class InATableComponent implements OnInit {
  isSmall: boolean;
  data: DataItem[] = [];
  displayedColumns1: string[] = ['id', 'name', 'min', 'max'];

  form: FormGroup;


  displayedColumns = ['id', 'name', 'min', 'max'];
  dataSource: MatTableDataSource<AbstractControl>;

  constructor(
    private readonly _drawerService: StateService,
    private readonly _breakpointObserver: BreakpointObserver,
    private readonly _fb: FormBuilder,
  ) {

    this.createForm();
    this.addRow();
    this.dataSource = new MatTableDataSource(this.tableControlArray.controls);
  }




  get tableControlArray() {
    return this.form.get('tableExample') as FormArray;
  }

  createForm() {
    this.form = this._fb.group({
      tableExample: this._fb.array([]),
    });
  }

  // trackRows(index: number, row: AbstractControl) {
  //   return row.value.uid;
  // }

  private addRow() {
    const rows = this.tableControlArray;
    const name = [
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

    name.map((element) => {
      rows.push(
        this._fb.group({
          name: [element.name, Validators.required],
          min: [element.min, Validators.required],
          max: [element.max, Validators.required],
        })
      );
    });

  }

  ngOnInit(): void {
    this._breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Handset])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSmall = true;
        } else {
          this.isSmall = false;
        }
      });

    this.data = [
      {
        id: 1,
        name: 'power',
        min: 10,
        max: 20,
      },
      {
        id: 2,
        name: 'power-1',
        min: 40,
        max: 20,
      },
    ]
  }
  toggleMenu(): void {
    const drawerOpen = this._drawerService.getDrawerOpen();
    this._drawerService.setDrawerOpen(!drawerOpen);
  }
}
