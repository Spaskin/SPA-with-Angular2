import { Component }from '@angular/core';
import {Router} from '@angular/router'

import { NgRedux } from 'ng2-redux';

import{ IAppState } from '../store';

import { AddAnimalModel} from './add-animal.model';

import {AnimalsActions} from '../store/animals/animals.actions';

@Component({
    selector:'add-animal',
    templateUrl:'./add-animal.component.html'
})
export class AddAnimalComponent{ 
    animal: AddAnimalModel = new AddAnimalModel();

   constructor (
       private ngRedux:NgRedux<IAppState>,
       private router:Router,
       private animalsActions:AnimalsActions){ }

    addAnimal() {
     this.animalsActions.addAnimal(this.animal)
     this.ngRedux
     .select(state => state.animals)
     .subscribe(animals => {
         if(animals.animalAdded){
             const animalId = animals.animalAddedId
             this.router.navigateByUrl(`/animals/details/${animalId}`);
         }
     })
    }
}
