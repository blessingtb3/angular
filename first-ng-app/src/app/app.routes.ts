import { Routes } from '@angular/router';

export const routes: Routes = [

    //loading home component as default
    {
        path:'',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then(m => m.HomeComponent);
        },
    },



    //loading todos component for /todos route
    {
        path: 'todos',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./todos/todos.component').then(m => m.TodosComponent);
        }
    }
];
