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
import { UnCamelCasePipe } from './shared/un-camel-case.pipe';
import { GroupByPipe } from './shared/groupby.pipe';
import { ObjectToList } from './shared/key-value.pipe';
import { DataListComponent } from './pages/data-list/data-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidationComponent } from './pages/form-validation/form-validation.component';
import { ActionListComponent } from './pages/action-list/action-list.component';
import { AppBarComponent } from './pages/app-bar/app-bar.component';


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
    AppBarComponent
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
    MatFormFieldModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
