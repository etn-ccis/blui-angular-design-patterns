import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StateService } from './services/state.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewportService } from './services/viewport.service';
import * as PXBColors from '@pxblue/colors';
import { DrawerLayoutVariantType } from '@pxblue/angular-components';
import { DrawerItem, ROUTEES } from './app-routing.module';
const iconSet = require('@pxblue/icons-svg/icons.svg');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-design-patterns';
    designPatternDetails: string;
    colors: Record<string, any>;
    variant: DrawerLayoutVariantType = 'persistent';
    routes = ROUTEES;
    selected: string;

    constructor(
        private router: Router,
        public readonly stateService: StateService,
        private readonly matIconRegistry: MatIconRegistry,
        private readonly domSanitizer: DomSanitizer,
        private readonly viewportService: ViewportService
    ) {
        this.colors = PXBColors;
        this.matIconRegistry.addSvgIconSetInNamespace(
            'px-icons',
            this.domSanitizer.bypassSecurityTrustResourceUrl(iconSet)
        );
    }

    select(route: DrawerItem): void {
        this.router.navigate([route.path]);
        this.selected = route.title;
    }
}
