import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import * as Colors from '@brightlayer-ui/colors';

export type Data = {
  title: string;
  delete: boolean;
};

@Component({
  selector: 'app-inline-actions',
  templateUrl: './inline-actions.component.html',
  styleUrls: ['./inline-actions.component.scss']
})
export class InlineActionsComponent implements OnInit {
  colors = Colors;
  data: Data[] = [
    {
        title: 'High Humidity',
        delete: false,
    },
    {
      title: 'Battery Service',
      delete: false,
    },
    {
      title: 'Bypass Over Frequency',
      delete: false,
    },
];
isSmall: boolean;
showActionButtons: boolean = false;
  constructor(
    private readonly _drawerService: StateService,
    private readonly _breakpointObserver: BreakpointObserver
  ) {}

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
}

toggleMenu(): void {
    const drawerOpen = this._drawerService.getDrawerOpen();
    this._drawerService.setDrawerOpen(!drawerOpen);
}

showAction(showBtn): void {
  this.showActionButtons = showBtn;
}

}
