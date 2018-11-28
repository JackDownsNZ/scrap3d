import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import {AuthService} from '../../services/auth.services';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements  AfterViewInit {
    constructor(public auth: AuthService,  public route: Router , public router: ActivatedRoute) {
    } 
    ngAfterViewInit() {
       
        if(!this.auth.isAuthenticated()) {
            this.router.queryParams.subscribe(data => console.log(data));
            this.auth.login();
        } else {
            this.route.navigate(['/dashboard'])
        }
    }
}
