/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
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
import { DrawerLayoutModule, DrawerModule, EmptyStateModule } from '@brightlayer-ui/angular-components';
import { DataListModule } from './pages/list/data-list/data-list.module';
import { ActionListModule } from './pages/list/action-list/action-list.module';
import { InPanelHeaderModule } from './pages/list/in-panel-header/in-panel-header.module';
import { InlineActionsModule } from './pages/list/inline-actions/inline-actions.module';
import { StatusListModule } from './pages/list/status-list/status-list.module';
import { MultiselectListModule } from './pages/list/multiselect-list/multiselect-list.module';
import { BasicBottomSheetModule } from './pages/overlays/basic-bottom-sheet/basic-bottom-sheet.module';
import { CollapsibleAppBarModule } from './pages/app-bar/collapsible-app-bar/collapsible-app-bar.module';
import { ComplexBottomSheetModule } from './pages/overlays/complex-bottom-sheet/complex-bottom-sheet.module';
import { SortableListModule } from './pages/list/sortable-list/sortable-list.module';
import { PageWideSearchModule } from './pages/app-bar/page-wide-search/page-wide-search.module';
import { ResponsiveTableModule } from './pages/list/responsive-table/responsive-table.module';
import { DynamicStepperModule } from './pages/dynamic-stepper/dynamic-stepper.module';
import { I18nModule } from './pages/i18n/i18n.module';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarIndeterminateModule } from './pages/loading-waiting-states/progress-bar-indeterminate/progress-bar-indeterminate.module';
import { SpinnerOverlaysModule } from './pages/loading-waiting-states/spinner-overlays/spinner-overlays.module';
import { ContextualSpinnersModule } from './pages/loading-waiting-states/contextual-spinners/contextual-spinners.module';
import { ProgressBarsModule } from './pages/loading-waiting-states/progress-bars/progress-bars.module';
import { SkeletonLoaderModule } from './pages/loading-waiting-states/skeleton-loader/skeleton-loader.module';
import { PasswordModule } from './pages/forms-and-validation/password/password.module';
import { PhoneNumberFormatModule } from './pages/forms-and-validation/phone-number-format/phone-number-format.module';
import { VerifyOnSubmitModule } from './pages/forms-and-validation/verify-on-submit/verify-on-submit.module';
import { FixLengthPasscodeModule } from './pages/forms-and-validation/fix-length-passcode/fix-length-passcode.module';
import { SectionedFormModule } from './pages/forms-and-validation/sectioned-form/sectioned-form.module';
import { InATableModule } from './pages/forms-and-validation/in-a-table/in-a-table.module';
import { InAListModule } from './pages/forms-and-validation/in-a-list/in-a-list.module';
import { InAnAppBarModule } from './pages/account-menu/in-an-app-bar/in-an-app-bar.module';
import { MenuInDrawerModule } from './pages/account-menu/in-a-drawer/in-a-drawer.module';
import { DropdownToolbarModule } from './pages/app-bar/dropdown-toolbar/dropdown-toolbar.module';
import { ContextualAppbarModule } from './pages/app-bar/contextual/contextual.module';
import { SearchBarModule } from './pages/app-bar/search-bar/search-bar.module';
import { TreeListModule } from './pages/list/tree/tree.module';
import { InlineButtonPanelModule } from './pages/list/inline-button-panel/inline-button-panel.module';
import { PromptDialogModule } from './pages/list/inline-button-panel/dialog/prompt-dialog.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        ActionListModule,
        InPanelHeaderModule,
        InlineActionsModule,
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
        MenuInDrawerModule,
        MatDividerModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        ContextualAppbarModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        EmptyStateModule,
        HttpClientModule,
        ComplexBottomSheetModule,
        SortableListModule,
        PageWideSearchModule,
        SearchBarModule,
        ResponsiveTableModule,
        DynamicStepperModule,
        LandingPageModule,
        DropdownToolbarModule,
        ProgressBarIndeterminateModule,
        SpinnerOverlaysModule,
        ContextualSpinnersModule,
        ProgressBarsModule,
        SkeletonLoaderModule,
        PasswordModule,
        PhoneNumberFormatModule,
        VerifyOnSubmitModule,
        FixLengthPasscodeModule,
        SectionedFormModule,
        InATableModule,
        InAListModule,
        TreeListModule,
        InAnAppBarModule,
        InlineButtonPanelModule,
        PromptDialogModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
