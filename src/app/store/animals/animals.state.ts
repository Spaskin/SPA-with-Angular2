export interface IAnimalsState{
 animalAdded: boolean,
 animalAddedId: number,
 allAnimals: Array<Object>,
 animalDetails: object
}

export const initialState:IAnimalsState = {
  animalAdded:false,
  animalAddedId:null,
  allAnimals: [],
  animalDetails: {}
}