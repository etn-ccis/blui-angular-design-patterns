import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataListComponent } from './pages/list/data-list/data-list.component';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';
import { ActionListComponent } from './pages/list/action-list/action-list.component';
import { StatusListComponent } from './pages/list/status-list/status-list.component';
import { MultiselectListComponent } from './pages/list/multiselect-list/multiselect-list.component';
import { BasicBottomSheetComponent } from './pages/overlays/basic-bottom-sheet/basic-bottom-sheet.component';
import { CollapsibleAppBarComponent } from './pages/app-bar/collapsible-app-bar/collapsible-app-bar.component';
import { ComplexBottomSheetComponent } from './pages/overlays/complex-bottom-sheet/complex-bottom-sheet.component';
import { SortableListComponent } from './pages/list/sortable-list/sortable-list.component';
import { SearchBarComponent } from './pages/app-bar/search-bar/search-bar.component';
import { ResponsiveTableComponent } from './pages/list/responsive-table/responsive-table.component';

export type DrawerItem = {
    title: string;
    path: string;
    children?: DrawerItem[];
    component?: any;
    redirectTo?: string;
};

export const ROUTES: DrawerItem[] = [
    {
        title: 'App Bar',
        path: 'app-bar',
        children: [
            {
                title: 'Collapsible',
                path: 'collapsible',
                component: CollapsibleAppBarComponent,
            },
            {
                title: 'Search',
                path: 'search',
                component: SearchBarComponent,
            },
        ],
    },
    {
        title: 'Empty States',
        path: 'empty-states',
        children: [
            {
                title: 'Loading',
                path: 'loading',
                component: PlaceholderComponent,
            },
        ],
    },
    {
        title: 'Form Validation',
        path: 'form-validation',
        component: PlaceholderComponent,
    },
    {
        title: 'Internationalization',
        path: 'internationalization',
        component: PlaceholderComponent,
    },
    {
        title: 'Lists',
        path: 'lists',
        children: [
            {
                title: 'Action List',
                path: 'action-list',
                component: ActionListComponent,
            },
            {
                title: 'Data List',
                path: 'data-list',
                component: DataListComponent,
            },
            {
                title: 'Multiselect List',
                path: 'multi-select-list',
                component: MultiselectListComponent,
            },
            {
                title: 'Sortable List',
                path: 'sortable-list',
                component: SortableListComponent,
            },
            {
                title: 'Status List',
                path: 'status-list',
                component: StatusListComponent,
            },
            {
                title: 'Responsive Table',
                path: 'responsive-table',
                component: ResponsiveTableComponent,
            },
        ],
    },
    {
        title: 'Overlays',
        path: 'overlays',
        children: [
            {
                title: 'Basic Bottom Sheet',
                path: 'basic-bottom-sheet',
                component: BasicBottomSheetComponent,
            },
            {
                title: 'Complex Bottom Sheet',
                path: 'complex-bottom-sheet',
                component: ComplexBottomSheetComponent,
            },
        ],
    },
    {
        title: 'Steppers',
        path: 'steppers',
        children: [
            {
                title: 'Dynamic Stepper',
                path: 'dynamic-stepper',
                component: PlaceholderComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
