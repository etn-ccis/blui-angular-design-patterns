import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import { StateService } from './services/state.service';
import * as PXBColors from '@pxblue/colors';
import { DrawerItem, ROUTES } from './app-routing.module';
import { ViewportService } from './services/viewport.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import {BidirectionalService} from "./pages/i18n/services/bidirectional.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    colors: Record<string, any> = PXBColors;
    routes = ROUTES;
    selected: string;

    constructor(
        private readonly _router: Router,
        public readonly stateService: StateService,
        public viewportService: ViewportService,
        private readonly _ref: ChangeDetectorRef,
        private readonly _bidiService: BidirectionalService,
        private readonly _breakpointObserver: BreakpointObserver
    ) {
      this._router.events.subscribe(event =>{
        if (event instanceof NavigationEnd){
          this._bidiService.changeDirectionality('EN');
        }
      })
    }

    ngOnInit(): void {
        this._breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Handset])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.stateService.setDrawerOpen(false);
                    this._ref.detectChanges();
                } else {
                    this.stateService.setDrawerOpen(true);
                    this._ref.detectChanges();
                }
            });
    }

    select(route: DrawerItem, parentRoute = '/'): void {
        if (!route.children) {
            void this._router.navigate([parentRoute + route.path]);
            this.stateService.setDrawerOpen(false);
            this.selected = route.title;
        }
    }

    navigateHome(): void {
        void this._router.navigate(['/']);
    }
}
