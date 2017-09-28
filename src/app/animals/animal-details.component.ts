import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';


import { AnimalsActions } from '../store/animals/animals.actions';

@Component({
    selector: 'animal-details',
    templateUrl:'./animal-details.component.html'
    
})

export class AnimalDetailsComponent implements OnInit {
   
    animal:object = {};

    constructor(
        private ngRedux:NgRedux<IAppState>,
        private animalsActions:AnimalsActions,
        private route:ActivatedRoute){ }

    ngOnInit(){
     this.route.params
     .subscribe(params =>{
         const id = params['id'];
         this.animalsActions.details(id);
         this.ngRedux
         .select(state =>state.animals.animalDetails)
         .subscribe(animal =>this.animal = animal);  
     })

     
    }
    
}