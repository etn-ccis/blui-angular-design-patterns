import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-in-a-list',
  templateUrl: './in-a-list.component.html',
  styleUrls: ['./in-a-list.component.scss']
})
export class InAListComponent implements OnInit {
  isSmall: boolean;
  constructor(
    private readonly _drawerService: StateService,
    private readonly _breakpointObserver: BreakpointObserver,
    private readonly _formBuilder: FormBuilder,
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
  }

  toggleMenu(): void {
    const drawerOpen = this._drawerService.getDrawerOpen();
    this._drawerService.setDrawerOpen(!drawerOpen);
}

}
