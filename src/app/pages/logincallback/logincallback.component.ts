import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.services';
@Component({
    selector: 'logincallback',
    templateUrl: './logincallback.component.html'
})
export class LoginCallbackComponent {
    constructor(auth: AuthService) {}
}