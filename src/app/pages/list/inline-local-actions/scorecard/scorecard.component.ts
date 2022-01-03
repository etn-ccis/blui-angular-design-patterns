import { Component, OnInit } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';
@Component({
    selector: 'blui-scorecard',
    templateUrl: './scorecard.component.html',
    styleUrls: ['./scorecard.component.scss'],
})
export class ScorecardComponent implements OnInit {
    colors = Colors;
    constructor() {}

    ngOnInit(): void {}
}
