import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StateService } from './services/state.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as BLUIColors from '@brightlayer-ui/colors';
import { DrawerItem, ROUTES } from './app-routing.module';
import { ViewportService } from './services/viewport.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { BidirectionalService } from './pages/i18n/services/bidirectional.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    colors: Record<string, any> = BLUIColors;
    routes = ROUTES;
    selected: string;

    constructor(
        private readonly _router: Router,
        public readonly stateService: StateService,
        public viewportService: ViewportService,
        private readonly _ref: ChangeDetectorRef,
        private readonly _bidiService: BidirectionalService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _matIconRegistry: MatIconRegistry,
        private readonly _domSanitizer: DomSanitizer
    ) {
        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this._bidiService.changeDirectionality('EN');
            }
        });
        this._matIconRegistry.addSvgIconSetInNamespace(
            'blui-icons',
            /* **Note to Brightlayer UI Users:
                Stackblitz has difficulty reading static assets found within the node_modules folder.
                For this example to work inside Stackblitz, we use a https request to fetch the Brightlayer UI icon set.
                In normal situations, we encourage you to import the iconSet directly from the node_modules folder like below:
                    // const iconSet = require('@brightlayer-ui/icons-svg/icons.svg').default;
                    // this._domSanitizer.bypassSecurityTrustResourceUrl('iconSet')
             */
            this._domSanitizer.bypassSecurityTrustResourceUrl(
                'https://raw.githubusercontent.com/etn-ccis/blui-icons/master/packages/svg/icons.svg'
            )
        );
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
