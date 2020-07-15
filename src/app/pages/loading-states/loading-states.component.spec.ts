import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoadingStatesComponent } from './loading-states.component';
import {dataList} from './data';

describe('AppComponent', () => {

    let app: LoadingStatesComponent;
    let fixture: ComponentFixture<LoadingStatesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoadingStatesComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(LoadingStatesComponent);
            app = fixture.debugElement.componentInstance;
        });
    }));

    it('should create the app', () => {
        fixture.detectChanges();
        expect(app).toBeTruthy();
    });

    describe('loading', () => {
        it('should show the placeholder', () => {
            fixture.detectChanges();
            const placeholder = document.getElementById('placeholder');
            expect(placeholder).toBeTruthy();
        });
        it('should not show the data-list', () => {
            fixture.detectChanges();
            const listContent = document.getElementById('data-list');
            expect(listContent).toBeFalsy();
        });
    });

    describe('after load', () => {
        beforeEach(() => {
            spyOn<any>(app, 'refreshData').and.callFake(() => {
                // Remove the timeout delay.
                app.deviceList = dataList;
            });
        });
        it('should not show the placeholder', () => {
            fixture.detectChanges();
            const placeholder = document.getElementById('placeholder');
            expect(placeholder).toBeFalsy();
        });
        it('should show the data-list', () => {
            fixture.detectChanges();
            const listContent = document.getElementById('data-list');
            expect(listContent).toBeTruthy();
        });
    });
});
