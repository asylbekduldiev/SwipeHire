import { Routes } from '@angular/router';
import { SwipComponent } from './pages/swip/swip.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    {
        path: "app",
        // canActivate: [AuthGuard],
        children: [
            {path: 'swip', component: SwipComponent}
            // {path: 'chat', component: ChatComponent},
            // {path: 'profile', component: ProfileComponent},
        ]

    }

];
