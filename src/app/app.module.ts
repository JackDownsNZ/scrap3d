import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent }   from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {LoginCallbackComponent} from './pages/logincallback/logincallback.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { PagesnavbarModule} from './shared/pagesnavbar/pagesnavbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import {  ReactiveFormsModule } from '@angular/forms';
import {AuthService, AuthGuard} from './services/auth.services'

@NgModule({
    imports:      [
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        PagesnavbarModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        LoginCallbackComponent
    ],
    providers: [AuthService, AuthGuard],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
