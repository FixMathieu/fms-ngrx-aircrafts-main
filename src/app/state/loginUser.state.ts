export enum LoginUserActionsTypes {
    GET_USER = "[User] Get User"
    
}

//nous définissons ici un objet évènement caractérisé par le type d'évt et son contenu indéfini
export interface ActionEvent {
    type : LoginUserActionsTypes,
    payload? : any
}

export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T> {
    dataState? : DataStateEnum,
    data? : T,
    errorMessage?:string
}