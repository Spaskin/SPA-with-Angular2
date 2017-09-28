import{NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import{ PrivateRoute } from './core/private-route';

import { StatsComponent } from './stats/stats.component'
import{RegisterComponent} from './users/register.component';
import{LoginComponent} from './users/login.component';
import{ProfileComponent} from './users/profile.component';
import{AddAnimalComponent} from './animals/add-animal.component';
import{ListAnimalsComponent} from './animals/list-animals.component';
import{AnimalDetailsComponent} from './animals/animal-details.component';


const routes:Routes =[
    {path: '', component:StatsComponent},
    {path: 'users/register', component:RegisterComponent},
    {path: 'users/login', component: LoginComponent},
    {path: 'users/profile', component: ProfileComponent},
    {
        path: 'animals/add',
        component: AddAnimalComponent,
        canActivate:[PrivateRoute]
    },
    {path: 'animals/all',component: ListAnimalsComponent},
    {path: 'animals/details/:id', component:AnimalDetailsComponent}
];

@NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
})

export class AnimalRoutesModule { }



