import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import {CanActivate} from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class AuthService {
  auth0Options = {
    auth: {
      redirectUrl: environment.auth0.callbackURL,
      responseType: 'token id_token',
      audience: `https://${environment.auth0.domain}/userinfo`,
      params: {
        scope: 'openid profile'
      }
    },
    theme: {
      logo: 'https://app.nobility.nz/assets/img/logo.png',
      primaryColor: '#31324F',
    },
    languageDictionary: {
      title: "Nobility"
    },
    autoclose: true,
    oidcConformant: true,
  };

  lock = new Auth0Lock(
    environment.auth0.clientId,
    environment.auth0.domain,
    this.auth0Options
  );
  constructor(private router: Router) {
    this.lock.on('authenticated', (authResult: any) => {
        this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
          if (error) {
            throw new Error(error);
          }
          localStorage.setItem('token', authResult.idToken);
          localStorage.setItem('profile', JSON.stringify(profile));
          this.router.navigate(['/']);
        });
    });

    this.lock.on('authorization_error', error => {
      console.log('something went wrong', error);
    });
  }

  login() {
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
    localStorage.removeItem('isLogin');
  }
  isAuthenticated() {
    return tokenNotExpired();
  }
}
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public route: Router, public auth: AuthService) {}
  canActivate() {
    if(this.auth.isAuthenticated()) {
      return true;
    }  else {
       this.route.navigate(['/login'])
       return false;
    }

  }
}
