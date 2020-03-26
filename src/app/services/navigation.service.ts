import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
    private toggleSource = new Subject<any>();
    navToggled$ = this.toggleSource.asObservable();
    toggleMenu() {
        this.toggleSource.next(true);
    }
}