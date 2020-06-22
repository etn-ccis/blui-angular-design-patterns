import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {StateService} from "../../services/state.service";
import {ViewportService} from "../../services/viewport.service";
import * as Colors from '@pxblue/colors';

@Component({
    selector: 'app-placeholder',
    template: `<div style="height: 100%; width: 100%; min-height: 100vh">
      <mat-toolbar [style.backgroundColor]="colors.blue[500]" [style.color]="colors.white[50]">
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

  colors = Colors;

  constructor(public readonly stateService: StateService, public viewportService: ViewportService) {}

}
