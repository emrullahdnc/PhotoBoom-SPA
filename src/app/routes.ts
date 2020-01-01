
import { Routes } from '@angular/router';
import { ListPhotoComponent } from './list-photo/list-photo.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { ViewPhotoComponent } from './view-photo/view-photo.component';
import { HomeComponent } from './home/home.component';



export const appRoutes: Routes = [

    {
        path: 'app-list-photo',
        component: ListPhotoComponent
    },
    {
        path: 'app-add-photo',
        component: AddPhotoComponent
    },
    {
        path: 'app-view-photo/:id',
        component: ViewPhotoComponent
    },

    {
        path: 'app-home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/app-home',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
