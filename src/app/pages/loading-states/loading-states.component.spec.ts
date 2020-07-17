import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { LoadingStatesComponent } from './loading-states.component';
import { dataList } from './data';
import { LoadingStatesModule } from './loading-states.module';

describe('AppComponent', () => {
    let app: LoadingStatesComponent;
    let fixture: ComponentFixture<LoadingStatesComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [LoadingStatesModule],
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(LoadingStatesComponent);
                app = fixture.debugElement.componentInstance;
            });
    }));

    it('should create the app', () => {
        fixture.detectChanges();
        void expect(app).toBeTruthy();
    });

    describe('loading', () => {
        it('should show the placeholder', () => {
            fixture.detectChanges();
            const placeholder = document.getElementById('placeholder');
            void expect(placeholder).toBeTruthy();
        });
        it('should not show the data-list', () => {
            fixture.detectChanges();
            const listContent = document.getElementById('data-list');
            void expect(listContent).toBeFalsy();
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
            void expect(placeholder).toBeFalsy();
        });
        it('should show the data-list', () => {
            fixture.detectChanges();
            const listContent = document.getElementById('data-list');
            void expect(listContent).toBeTruthy();
        });
    });
});
