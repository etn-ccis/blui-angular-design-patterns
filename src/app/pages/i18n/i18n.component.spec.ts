import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { I18nComponent } from './i18n.component';
import { I18nModule } from './i18n.module';

describe('I18nComponent', () => {
    let fixture: ComponentFixture<I18nComponent>;
    let component: I18nComponent;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [I18nModule],
        }).compileComponents();

        fixture = TestBed.createComponent(I18nComponent);
        component = fixture.debugElement.componentInstance;
    }));

    it('should create the app', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it(`should load english by default`, () => {
        fixture.detectChanges();
        const i18n = fixture.nativeElement.querySelector('#i18n').innerHTML;
        component.translate.use('SE');
        void expect(i18n).toEqual('Internationalization');
    });

    it(`should load spanish on language change`, () => {
        fixture.detectChanges();
        component.translate.use('ES');
        fixture.detectChanges();
        const i18n = fixture.nativeElement.querySelector('#i18n').innerHTML;
        void expect(i18n).toEqual('Internacionalización');
    });
});
