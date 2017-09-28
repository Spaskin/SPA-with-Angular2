export interface IUsersState {
    userRegistered: boolean,
    userAuthenticated:boolean,
    token:string,
    username: string,
    profile:Array<object>
}

export const initialState: IUsersState = {
    userRegistered: false,
    userAuthenticated:false,
    token:null,
    username: null,
    profile:[]
}