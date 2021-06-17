import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { StateService } from '../../../services/state.service';

@Component({
    selector: 'app-progress-bars',
    templateUrl: './progress-bars.component.html',
    styleUrls: ['./progress-bars.component.scss'],
})
export class ProgressBarsComponent implements OnInit {
    isSmall: boolean;
    checked = false;
    foldersList = [
        { label: 'The Best Dev Team', value: '1' },
        { label: 'The Best Design Team', value: '2' },
        { label: 'The Best UX Team', value: '3' },
        { label: 'The Best Management Team', value: '4' },
        { label: 'The Best Facility Team', value: '5' },
        { label: 'The Most Narcissist Team', value: '6' },
    ];
    uploadFileList = [];
    interval;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit(): void {
        this._breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Handset])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.isSmall = true;
                } else {
                    this.isSmall = false;
                }
            });
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    onToggle(event: MatSlideToggleChange): void {
        this.checked = event.checked;
    }

    uploadFile(): void {
        this.uploadFileList.push({ fileName: 'PX Blue is Awesome.pdf', progress: 0 });
        for (let i = 0; i <= this.uploadFileList.length; i++) {
            this.interval = setInterval(() => {
                if (this.uploadFileList[i]) {
                    if (this.uploadFileList[i].progress < 100) {
                        this.uploadFileList[i].progress += 1;
                        this.uploadFileList[i].status = `Uploading (${this.uploadFileList[i].progress}%)`;
                    } else {
                        this.uploadFileList[i].status = 'Complete';
                        clearInterval(this.interval);
                    }
                }
            }, 100);
            setTimeout(() => {
                this.uploadFileList.splice(i, 1);
            }, 10000);
        }
    }

    cancelUploading(item): void {
        this.uploadFileList.splice(item, 1);
    }
}
