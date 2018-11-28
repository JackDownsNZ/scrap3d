import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import {LoginComponent} from './pages/login/login.component';
import {LoginCallbackComponent} from './pages/logincallback/logincallback.component';
import {AuthGuard} from './services/auth.services';
export const AppRoutes: Routes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },{
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [{
            path: '',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },{
            path: '',
            loadChildren: './userpage/user.module#UserModule'
        }]
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'logincallback',
            component: LoginCallbackComponent
        }
        ,
        {
            path: '',
            component: AuthLayoutComponent,
            children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
        }
];
