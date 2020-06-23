import { Component } from '@angular/core';
import {StateService} from "../../services/state.service";
import {ViewportService} from "../../services/viewport.service";

@Component({
    selector: 'app-placeholder',
    template: `<div style="height: 100%; width: 100%; min-height: 100vh">
      <mat-toolbar color="primary" style="color: white">
        <button
          *ngIf="viewportService.isSmall()"
          mat-icon-button
          style="margin-right: 16px"
          (click)="stateService.setDrawerOpen(true)"
        >
          <mat-icon>menu</mat-icon>
        </button>
        <h2>Placeholder</h2>
      </mat-toolbar>
      TODO
    </div>`,
})
export class PlaceholderComponent {

  constructor(public readonly stateService: StateService, public viewportService: ViewportService) {}

}
