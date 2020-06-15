import { animate, state, style, transition, trigger } from '@angular/animations';

export function slideInLeft(timings = '250ms cubic-bezier(0.4, 0.0, 0.2, 1)') {
    return trigger('slide-left', [
        transition(':enter', [
            style({ transform: 'translateX(+100%)' }),
            animate('200ms ease-in', style({ transform: 'translateX(0%)' })),
        ]),
        transition(':leave', [animate('200ms ease-in', style({ transform: 'translateX(+100%)' }))]),
    ]);
}
