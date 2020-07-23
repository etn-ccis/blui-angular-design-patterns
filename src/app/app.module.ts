import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrawerLayoutModule, DrawerModule, EmptyStateModule } from '@pxblue/angular-components';
import { DataListModule } from './pages/list/data-list/data-list.module';
import { ActionListModule } from './pages/list/action-list/action-list.module';
import { StatusListModule } from './pages/list/status-list/status-list.module';
import { MultiselectListModule } from './pages/list/multiselect-list/multiselect-list.module';
import { BasicBottomSheetModule } from './pages/overlays/basic-bottom-sheet/basic-bottom-sheet.module';
import { CollapsibleAppBarModule } from './pages/app-bar/collapsible-app-bar/collapsible-app-bar.module';
import { ComplexBottomSheetModule } from './pages/overlays/complex-bottom-sheet/complex-bottom-sheet.module';
import { SortableListModule } from './pages/list/sortable-list/sortable-list.module';
import { SearchBarModule } from './pages/app-bar/search-bar/search-bar.module';
import { ResponsiveTableModule } from './pages/list/responsive-table/responsive-table.module';
import { DynamicStepperModule } from './pages/dynamic-stepper/dynamic-stepper.module';
import { FormValidationModule } from './pages/form-validation/form-validation.module';
import { I18nModule } from './pages/i18n/i18n.module';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingStatesModule } from './pages/loading-states/loading-states.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        ActionListModule,
        DataListModule,
        StatusListModule,
        MultiselectListModule,
        CollapsibleAppBarModule,
        BasicBottomSheetModule,
        I18nModule,
        DrawerLayoutModule,
        DrawerModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        EmptyStateModule,
        HttpClientModule,
        ComplexBottomSheetModule,
        SortableListModule,
        SearchBarModule,
        LoadingStatesModule,
        ResponsiveTableModule,
        DynamicStepperModule,
        FormValidationModule,
        LandingPageModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
