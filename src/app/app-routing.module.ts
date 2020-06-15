import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from './pages/data-list/data-list.component';
import { FormValidationComponent } from './pages/form-validation/form-validation.component';
import { ActionListComponent } from './pages/action-list/action-list.component';
import { AppBarComponent } from './pages/app-bar/app-bar.component';
import { EmptyStatesComponent } from './pages/empty-states/empty-states.component';
import { ActionComponent } from './pages/empty-states/action/action.component';
import { TextOnlyComponent } from './pages/empty-states/text-only/text-only.component';
import { PlaceholderComponent } from './pages/empty-states/placeholder/placeholder.component';
import { SubContentComponent } from './pages/empty-states/sub-content/sub-content.component';

const routes: Routes = [
    {
        path: 'app-bar',
        component: AppBarComponent,
    },
    {
        path: 'empty-states',
        component: EmptyStatesComponent,
        children: [
            {
                path: 'action',
                component: ActionComponent,
            },
            {
                path: 'text-only',
                component: TextOnlyComponent,
            },
            {
                path: 'placeholder',
                component: PlaceholderComponent,
            },
            {
                path: 'sub-content',
                component: SubContentComponent,
            },
            {
                path: '',
                redirectTo: 'action',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: 'data-list',
        component: DataListComponent,
    },
    {
        path: 'action-list',
        component: ActionListComponent,
    },
    {
        path: 'form-validation',
        component: FormValidationComponent,
    },
    {
        path: '**',
        redirectTo: '/',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
