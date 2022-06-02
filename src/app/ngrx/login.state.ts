
import { User } from "../model/user.model"


export enum LoginStateEnum{  // les différents états du state
    LOADING = "Loading",    //chargement en cours
    LOADED = "Loaded",      //chargé
    ERROR = "Error",        //erreur
    INITIAL = "Initial"     //état initial
}
export interface LoginState {    //structure de notre STATE
    authUser : User,          //liste d'avions qui s'affichent
    errorMessage:string,             //un message d'erreur
    dataState : LoginStateEnum   //état du state
}
//il est nécessaire de définir l'état initial du state avec des valeurs par défaut
export const initState : LoginState = {
    authUser : { "email": "", "password":""},
    errorMessage:"",
    dataState : LoginStateEnum.INITIAL
}

