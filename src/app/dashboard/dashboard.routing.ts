import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HelpComponent } from './help/help.component';


export const DashboardRoutes: Routes = [{
    path: '',
    children: [{
        path: 'dashboard',
        component: DashboardComponent
    },{
        path: 'help',
        component: HelpComponent
    }]
}];
