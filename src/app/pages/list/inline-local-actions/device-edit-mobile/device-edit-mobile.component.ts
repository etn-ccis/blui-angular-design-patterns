import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'blui-device-edit-mobile',
    templateUrl: './device-edit-mobile.component.html',
    styleUrls: ['./device-edit-mobile.component.scss'],
})
export class DeviceEditMobileComponent implements OnInit {
    @Input() mobileDeviceName = '';
    @Output() newMobileDeviceName = new EventEmitter<string>();
    constructor() {}

    ngOnInit(): void {}

    addNewMobileDeviceName(value: string): void {
        this.newMobileDeviceName.emit(value);
    }
}
