import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
  // return slideToLeft();
  return melting();
}

function melting() {

    return trigger('routerTransition', [
        state('void', style({
            position: 'fixed'
            // width:'100%'
            // transition:'0.2s opacity 0.5s ease-in-out'
        })),

        state('*', style({
            position: 'fixed'
            // width:'100%'
            // transition:'0.2s opacity 0.5s ease-in-out'
        })),

        transition(':enter', [  // before 2.1: transition('void => *', [
            style({
                transform: 'translateY(10%)',
                opacity: '0'
            }),
            animate('0.05s 0.2s ease-in-out', style({
                transform: 'translateY(0%)',
                opacity: '1'
            }))
        ]),

        transition(':leave', [  // before 2.1: transition('* => void', [
            style({
                transform: 'translateY(0%)',
                opacity: '1'
            }),
            animate('0.5s ease-in-out', style({
                transform: 'translateY(-10%)',
                opacity: '0'
            }))
        ])
    ]);
}
