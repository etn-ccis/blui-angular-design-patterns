import {
  Component,
  OnInit,
} from '@angular/core';

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
  displayedColumns: string[] = ['id', 'name', 'min', 'max'];
  constructor(
    private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
  ) { }

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
