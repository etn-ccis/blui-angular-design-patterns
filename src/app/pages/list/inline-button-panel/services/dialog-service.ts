import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    deleteData = new Subject<boolean>();
    constructor() {}
}
