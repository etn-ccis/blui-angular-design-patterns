import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './services/state.service';
import * as PXBColors from '@pxblue/colors';
import { DrawerItem, ROUTES } from './app-routing.module';
import { ViewportService } from './services/viewport.service';

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
        public viewportService: ViewportService
    ) {}

    select(route: DrawerItem, parentRoute = '/'): void {
        if (!route.children) {
            void this._router.navigate([parentRoute + route.path]);
            this.selected = route.title;
        }
    }

    navigateHome(): void {
        void this._router.navigate(['/']);
    }
}
