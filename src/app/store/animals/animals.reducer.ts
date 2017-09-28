import { initialState } from './animals.state';
 
import { 
    ADD_ANIMAL,
    ALL_ANIMALS,
    ANIMAL_DETAILS,
    ANIMAL_DELETE
 } from './animals.actions'

function addAnimal(state, action){
    const result = action.result;
    return Object.assign({}, state,{
        animalAdded:result.success,
        animalAddedId:result.success ? result.animal.id : null
    });
   
}

function allAnimals(state, action){
    return Object.assign({}, state, {
        allAnimals: action.animals
    });
}

function  animalDetails(state, action){
    return Object.assign({},state,{
       animalDetails: action.animal
    })
}
function animalDelete (state, action){
    const result = action.resultl;
    if(result.success){
        const id = action.id;
        const animalIndex = state.allAnimals.findIndex(a => a.id ===id);

        if(animalIndex  >=0) {
             const allAnimals = state.allAnimals.splice(animalIndex, 1)
             return Object.assign({}, state,{
                 allAnimals
             })
        }
    }
}

export function animalsReducer(state = initialState,action){
    switch(action.type){
        case ADD_ANIMAL: 
        return addAnimal(state, action);
        case ALL_ANIMALS:
        return allAnimals (state, action);
        case ANIMAL_DETAILS:
        return animalDetails (state, action);
        case ANIMAL_DELETE:
        return animalDelete (state, action)
        default:
        return state
    }
 
}