import {Component, NgZone, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {DomSanitizer} from '@angular/platform-browser';
import {dataList} from './data';
import {InterpreterService} from './services/interpreter.service';
import {StateService} from "../../services/state.service";
import {ScrollDispatcher} from "@angular/cdk/scrolling";

@Component({
    selector: 'app-loading-states',
    templateUrl: './loading-states.component.html',
    styleUrls: ['./loading-states.component.scss']
})
export class LoadingStatesComponent implements OnInit {

    cols = 4;
    isSmall: boolean;
    deviceList = [
        {
            name: 'placeholder1',
            data: {}
        },
        {
            name: 'placeholder2',
            data: {}
        },
        {
            name: 'placeholder3',
            data: {}
        }, {
            name: 'placeholder4',
            data: {}
        }
    ];

  constructor(
    private readonly _drawerService: StateService,
    private readonly _breakpointObserver: BreakpointObserver,
    private readonly _scrollDispatcher: ScrollDispatcher,
    private readonly _interpreter: InterpreterService,
    private readonly _ngZone: NgZone
  ) {

        this._breakpointObserver
          .observe([Breakpoints.Small, Breakpoints.Medium])
          .subscribe((state: BreakpointState) => {

            const small = Object.keys(state.breakpoints)[0];
            const medium = Object.keys(state.breakpoints)[1];

            console.log(state);

            if (state.matches) {
              this.isSmall = true;
            } else {
              this.isSmall = false;
            }
          });


        /*    if (state.breakpoints[small]) {
              this.cols = 1;
              this.isSmall = true;
            } else if (state.breakpoints[medium]) {
              this.cols = 2;
              this.isSmall = false;
            } else {
              this.cols = 4;
              this.isSmall = false;
            }
          }); */
    }

    ngOnInit() {
        this.refreshData();
    }

    refreshData() {
        this.deviceList = [
              {
                name: 'placeholder1',
                data: undefined
              }
            , {
                name: 'placeholder2',
                data: undefined
            }, {
                name: 'placeholder3',
                data: undefined
            }, {
                name: 'placeholder4',
                data: undefined
            }
        ];

        setTimeout(() => {
            this.deviceList = dataList;
        }, 3000);
    }
}
