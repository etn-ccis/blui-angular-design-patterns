import { Component, ChangeDetectorRef } from '@angular/core';
import { NavigationService } from '../../../app/services/navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-drawer',
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
    open = true;

    constructor(
        private readonly _navigationService: NavigationService,
        private readonly route: ActivatedRoute,
        changeDetectorRef: ChangeDetectorRef
    ) {
        _navigationService.navToggled$.subscribe((value) => {
            this.open = !this.open;
            changeDetectorRef.detectChanges();
        });
    }
}
