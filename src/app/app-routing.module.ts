import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from './pages/data-list/data-list.component';
import { FormValidationComponent } from './pages/form-validation/form-validation.component';
import { ActionListComponent } from './pages/action-list/action-list.component';


const routes: Routes = [
  {
    path: 'data-list',
    component: DataListComponent
  },
  {
    path: 'action-list',
    component: ActionListComponent
  },
  {
    path: 'form-validation',
    component: FormValidationComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
