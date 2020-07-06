import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './services/state.service';
import * as PXBColors from '@pxblue/colors';
import { DrawerItem, ROUTES } from './app-routing.module';
import { ViewportService } from './services/viewport.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    colors: Record<string, any> = PXBColors;
    routes = ROUTES;
    selected: string;

    constructor(
        // eslint-disable-next-line @typescript-eslint/naming-convention
        private readonly router: Router,
        public readonly stateService: StateService,
        public viewportService: ViewportService
    ) {}

    select(route: DrawerItem, parentRoute = '/'): void {
        if (!route.children) {
            void this.router.navigate([parentRoute + route.path]);
            this.selected = route.title;
        }
    }
}
