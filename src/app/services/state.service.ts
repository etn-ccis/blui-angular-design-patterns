import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StateService {
    private drawerOpen = false;

    setDrawerOpen(drawerOpen: boolean): void {
        this.drawerOpen = drawerOpen;
    }

    getDrawerOpen(): boolean {
        return this.drawerOpen;
    }
}
