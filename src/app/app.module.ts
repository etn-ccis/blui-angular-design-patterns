import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationService } from './services/navigation.service';
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
import { EmptyStatesComponent } from './pages/empty-states/empty-states.component';
import { ActionComponent } from './pages/empty-states/action/action.component';
import { TextOnlyComponent } from './pages/empty-states/text-only/text-only.component';
import { PlaceholderComponent } from './pages/empty-states/placeholder/placeholder.component';
import { SubContentComponent } from './pages/empty-states/sub-content/sub-content.component';
// import { EmptyStateModule } from '@pxblue/angular-components';

@NgModule({
    declarations: [
        AppComponent,
        DrawerComponent,
        UnCamelCasePipe,
        GroupByPipe,
        ObjectToList,
        DataListComponent,
        FormValidationComponent,
        ActionListComponent,
        AppBarComponent,
        EmptyStatesComponent,
        ActionComponent,
        TextOnlyComponent,
        PlaceholderComponent,
        SubContentComponent,
    ],
    imports: [
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
        // EmptyStateModule
    ],
    providers: [NavigationService],
    bootstrap: [AppComponent],
})
export class AppModule {}
