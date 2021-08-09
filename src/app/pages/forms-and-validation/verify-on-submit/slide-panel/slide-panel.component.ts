import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

type PaneDirection = 'left' | 'right';

@Component({
    selector: 'pxb-slide-panel',
    styleUrls: ['./slide-panel.component.scss'],
    templateUrl: './slide-panel.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('slide', [
            state('left', style({ transform: 'translateX(0)' })),
            state('right', style({ transform: 'translateX(-50%)' })),
            transition('* => *', animate(500)),
        ]),
    ],
})
export class SlidePanelComponent {
    @Input() activePane: PaneDirection = 'left';
}
