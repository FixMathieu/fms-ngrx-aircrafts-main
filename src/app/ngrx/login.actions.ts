import { Action } from "@ngrx/store";
import { User } from "../model/user.model";


export enum LoginUserActionsTypes{
    //Action : Authentication 
    //s'agissant de l'action consistant à afficher tous les avions, nous avons 3 états possible
    GET_USER = "[Users] Get User",                //demande tous les avions
    GET_USER_SUCCESS = "[Users] Get User Success",//demande ok
    GET_USER_ERROR = "[Users] Get User Error",    //demande nok

  
}


export class GetUserAction implements Action{
    type: LoginUserActionsTypes = LoginUserActionsTypes.GET_USER;
    constructor(public payload:any) {   
    }
}
export class GetUserActionSuccess implements Action{
    type: LoginUserActionsTypes = LoginUserActionsTypes.GET_USER_SUCCESS;
    constructor(public payload:User) {
    }
}
export class GetUserActionError implements Action{
    type: LoginUserActionsTypes = LoginUserActionsTypes.GET_USER_ERROR;
    constructor(public payload:string) {   //message d'erreur
    }   
}
export type LoginActions = GetUserAction|GetUserActionSuccess |GetUserActionError;