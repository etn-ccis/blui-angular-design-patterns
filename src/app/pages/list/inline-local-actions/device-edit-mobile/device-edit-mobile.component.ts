import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-device-edit-mobile',
    templateUrl: './device-edit-mobile.component.html',
    styleUrls: ['./device-edit-mobile.component.scss'],
})
export class DeviceEditMobileComponent {
    @Input() mobileDeviceName = '';
    @Output() newMobileDeviceName = new EventEmitter<string>();

    addNewMobileDeviceName(value: string): void {
        this.newMobileDeviceName.emit(value);
    }
}
