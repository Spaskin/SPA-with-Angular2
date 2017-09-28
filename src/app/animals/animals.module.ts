import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import{ AddAnimalComponent } from './add-animal.component';
import{ ListAnimalsComponent } from './list-animals.component';
import{ AnimalDetailsComponent } from './animal-details.component';

import { AnimalsService } from './animals.service';

import{ AnimalsActions } from '../store/animals/animals.actions';

@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        CommonModule
    ],
    declarations: [
        AddAnimalComponent,
        ListAnimalsComponent,
        AnimalDetailsComponent
    ],
    providers: [
        AnimalsService,
        AnimalsActions
    ]
    
})

export class AnimalsModule{ }