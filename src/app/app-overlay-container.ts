import { OverlayContainer } from '@angular/cdk/overlay';

export class AppOverlayContainer extends OverlayContainer {
    constructor() {
        super(undefined);
    }

    protected _createContainer(): void {
        const container: HTMLDivElement = document.createElement('div');
        container.classList.add('app-overlay-container');

        const element: Element | null = document.querySelector('.app-content');
        if (element !== null) {
            element.appendChild(container);
            this._containerElement = container;
        }
    }
}
