import { Injectable } from '@angular/core'
import { HttpService } from '../core/http.service'

@Injectable()
export class AnimalsService{
    constructor (private httpService:HttpService){ }

    addAnimal(animal){
    return this.httpService.post('animals/create', animal , true);
    }

    allAnimals (page = 1, search = null){
        let url = `animals/all?page=${page}`;
        if(search){
        url += `&search=${search}`;
        }
     return this.httpService.get(url)
    }

    details (id){
        return this.httpService.get(`animals/details/${id}` , true)
    }

    delete (id){
        return this.httpService.post(`animals/delete/${id}`, {}, true)
    }
}