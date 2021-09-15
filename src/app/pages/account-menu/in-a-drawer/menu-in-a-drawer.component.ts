import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {StateService} from '../../../services/state.service';

@Component({
  selector: 'app-menu-in-a-drawer',
  templateUrl: './menu-in-a-drawer.component.html',
  styleUrls: ['./menu-in-a-drawer.component.scss'],
})
export class MenuInADrawerComponent implements OnInit {
  isSmall: boolean;

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
}
