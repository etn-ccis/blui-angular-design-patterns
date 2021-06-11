import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { StateService } from '../../../services/state.service';
import { eulaDetails } from './eula-details';

@Component({
  selector: 'app-spinner-overlays',
  templateUrl: './spinner-overlays.component.html',
  styleUrls: ['./spinner-overlays.component.scss']
})
export class SpinnerOverlaysComponent implements OnInit {

  isSmall: boolean;
  checked = false;
  eulaDetails = eulaDetails;
  isEulaLoaded = false;
  buttonClicked = false;

  constructor(
    private readonly _drawerService: StateService,
    private readonly _breakpointObserver: BreakpointObserver
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

    this.loadEula();
  }

  toggleMenu(): void {
    const drawerOpen = this._drawerService.getDrawerOpen();
    this._drawerService.setDrawerOpen(!drawerOpen);
  }

  onToggle(event: MatSlideToggleChange): void {
    this.checked = event.checked;
  }

  loadEula(): void {
    setTimeout(() => {
      this.isEulaLoaded = true;
    }, 3000);
  }

  loadSpinner(): void {
    this.buttonClicked = true;
  }
}
