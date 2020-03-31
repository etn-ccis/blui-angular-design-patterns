import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import * as Colors from '@pxblue/colors';

@Component({
  selector: 'app-sub-content',
  templateUrl: './sub-content.component.html',
  styleUrls: ['./sub-content.component.scss']
})
export class SubContentComponent implements OnDestroy {

  cols: number = 4;
  subscription: any;
  Colors: Object = Colors;
  devices = [
    { id: 101 },
    { id: 201, performance: "Poor", battery: "20%" },
    { id: 202, performance: "Average", battery: "15%" },
    { id: 203, performance: "Excellent", battery: "96%" }
  ];

  constructor(private breakpointObserver: BreakpointObserver, changeDetectorRef: ChangeDetectorRef) {
    this.subscription = this.breakpointObserver.observe([ '(max-width: 599.99px)', '(max-width: 959.99px)']).subscribe(result => {
      const small = Object.keys(result.breakpoints)[0];
      const medium = Object.keys(result.breakpoints)[1];

      if (result.breakpoints[small]) { this.cols = 1 }
      else if (result.breakpoints[medium]) { this.cols = 2 }
      else { this.cols = 4 }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
