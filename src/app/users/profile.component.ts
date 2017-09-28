import {Component , OnInit} from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { UsersActions } from '../store/users/users.actions';
import { AnimalsActions } from '../store/animals/animals.actions';

@Component({
    selector:'profile',
    templateUrl:'./profile.component.html'
})
export class ProfileComponent implements OnInit {
    animals: Array<object> = [];
  constructor (
      private ngRedux:NgRedux<IAppState>,
      private usersActions:UsersActions,    
      private animalActions:AnimalsActions
  ){ }

  ngOnInit(){
      this.usersActions.profile();
      this.ngRedux
      .select(state => state.users.profile)
      .subscribe(profile =>this.animals = profile)
  }

  delete(id){
   this.animalActions.delete(id);
  }
}