import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: '', 
    component:LayoutComponent,
    children:[
        {path: '', component: HomeComponent},
        {path: "login", component: LoginComponent}
    ] }

];
