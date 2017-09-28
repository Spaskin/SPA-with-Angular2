import { Injectable} from '@angular/core';

import { NgRedux} from 'ng2-redux';
import { IAppState } from '..';

import { AnimalsService } from '../../animals/animals.service';

export const ADD_ANIMAL = 'animals/ADD';
export const ALL_ANIMALS = 'animals/ALL';
export const ANIMAL_DELETE = 'animals/DELETE';
export const ANIMAL_DETAILS = 'animals/DETAILS';

@Injectable()
export class AnimalsActions{
    constructor (
        private NgRedux:NgRedux<IAppState>,
        private animalsService:AnimalsService) { }
    addAnimal (animal){
     this.animalsService
     .addAnimal(animal)
     .subscribe(result =>{
      this.NgRedux.dispatch({
          type: ADD_ANIMAL,
          result
      });
     });
    }
    allAnimals (page = 1, search = null){
        this.animalsService
        .allAnimals(page, search)
        .subscribe(animals =>{
         this.NgRedux.dispatch({
            type:ALL_ANIMALS,
            animals

         });
        });
    }
    details(id){
        this.animalsService
        .details(id)
        .subscribe(animal =>{
            this.NgRedux.dispatch({
                type:ANIMAL_DETAILS,
                animal
            });
        });
    }
    delete (id){
     this.animalsService
     .delete(id)
     .subscribe(result =>{
         this.NgRedux.dispatch({
             type:ANIMAL_DELETE,
             result,
             id
         })
     })
    }
}