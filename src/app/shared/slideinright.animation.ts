import {
    animate,
    state,
    style,
    transition,
    trigger,
  } from '@angular/animations';
  
  export function slideInRight(timings = '250ms cubic-bezier(0.4, 0.0, 0.2, 1)') {
    return trigger('slide-right', [
      transition(':enter', [
          style({transform: 'translateX(-100%)'}),
          animate(timings, style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
          animate(timings, style({transform: 'translateX(-100%)'}))
        ])
    ]);
  }