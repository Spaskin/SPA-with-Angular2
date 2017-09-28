import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {RegisterUserModel} from './register-user.module';

import { UsersActions } from '../store/users/users.actions';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';


@Component({
    selector: 'register',
    templateUrl:'./register.component.html'
})

export class RegisterComponent {
    user: RegisterUserModel = new RegisterUserModel();

    constructor(
        private userActions: UsersActions,
        private router: Router, 
        private ngRedux: NgRedux<IAppState>
    ){ }

    register (){
     this.userActions.register(this.user);
     this.ngRedux
     .select(state => state.users.userRegistered)
     .subscribe(userRegistered => {
         if (userRegistered) {
            this.router.navigateByUrl('users/login')
         };
     });
    }
}