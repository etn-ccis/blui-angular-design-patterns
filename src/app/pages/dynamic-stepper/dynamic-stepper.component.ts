import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from 'src/app/services/state.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';

@Component({
    selector: 'app-dynamic-stepper',
    templateUrl: './dynamic-stepper.component.html',
    styleUrls: ['./dynamic-stepper.component.scss'],
    providers: [
        {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { displayDefaultIndicatorType: false },
        },
    ],
})
export class DynamicStepperComponent implements OnInit {
    isSmall: boolean;
    isLinear = false;
    formGroup: FormGroup;
    form: FormArray;
    RandomFormGroup: FormGroup;
    @ViewChild('stepper', {}) stepper;
    stepOptions = [
        { label: 'Buy Groceries', value: '1' },
        { label: 'Cook Dinner', value: '2' },
        { label: 'Go To Sleep', value: '3' },
        { label: 'Go To Work', value: '4' },
        { label: 'Wake Up', value: '5' },
    ];
    steps = [{ title: null, value: null, completed: false }];
    allCompleted = false;
    procedureFinished = false;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.RandomFormGroup = this._formBuilder.group({
            Ctrl: ['', Validators.required],
        });

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

    addItem(): void {
        this.steps.push({ title: null, value: null, completed: false });
        this.stepper.selectedIndex = this.steps.length - 1;
        this.allCompleted = false;
    }

    changeStepSelection(event: MatRadioChange, index: number): void {
        setTimeout(() => {
            this.stepper.selectedIndex = this.steps.length;
        }, 0);
        this.steps[index].title = this.stepOptions[event.value - 1].label;
        this.steps[index].completed = true;
        this.allCompleted = true;
    }

    onRemoveAll(): void {
        this.steps = [];
        this.stepper.selectedIndex = this.steps.length;
        this.allCompleted = true;
    }

    removeStep(i: number): void {
        if (this.steps.length < i + 1) {
            return;
        }
        this.steps.splice(i, 1);
        this.stepper.selectedIndex = this.steps.length;
        this.checkCompleted();
    }

    checkCompleted(): void {
        this.allCompleted = this.steps.every((step) => step.completed);
    }

    handleDone(): void {
        this.procedureFinished = true;
    }

    handleReset(): void {
        this.procedureFinished = false;
        this.steps = [];
        this.steps.push({ title: null, value: null, completed: false });
        this.allCompleted = false;
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
