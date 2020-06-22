import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { UnCamelCasePipe } from './shared/un-camel-case.pipe';
import { GroupByPipe } from './shared/groupby.pipe';
import { ObjectToList } from './shared/key-value.pipe';
import { DataListComponent } from './pages/data-list/data-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidationComponent } from './pages/form-validation/form-validation.component';
import { ActionListComponent } from './pages/action-list/action-list.component';
import { AppBarComponent } from './pages/app-bar/app-bar.component';
import { DrawerLayoutModule, DrawerModule, EmptyStateModule } from '@pxblue/angular-components';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';

@NgModule({
    declarations: [
        AppComponent,
        UnCamelCasePipe,
        GroupByPipe,
        ObjectToList,
        DataListComponent,
        FormValidationComponent,
        ActionListComponent,
        AppBarComponent,
        PlaceholderComponent,
    ],
    imports: [
        DrawerLayoutModule,
        DrawerModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
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
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
