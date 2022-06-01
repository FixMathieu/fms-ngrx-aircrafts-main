
import { Action } from "@ngrx/store"
import { LoginUserActionsTypes, LoginActions } from "./login.actions";
import { initState, LoginState, LoginStateEnum } from "./login.state";

export function LoginReducer(state : LoginState = initState, action:Action) : LoginState {   
    switch(action.type){    //pour chaque action, on retourne un clone du state (immutable)
        case LoginUserActionsTypes.GET_USER:     
            return {...state, dataState:LoginStateEnum.LOADING }   //renvoi clone du state + le nouveau dataState
        case LoginUserActionsTypes.GET_USER_SUCCESS: 
        // Action a été reçu par l'effect qui a fait une demande en base, reçoit les datas et génère l'action pour indiquer que tout est ok
            return {...state, dataState:LoginStateEnum.LOADED, authUser:(<LoginActions> action).payload}
            // renvoi clone + nouveau dataState + liste des avions en base contenu dans le payload
        case LoginUserActionsTypes.GET_USER_ERROR : 
            return {...state, dataState:LoginStateEnum.ERROR, errorMessage:(<LoginActions> action).payload}
        
       

        default : 
            return {...state} 
    }
}   //en bref : le reducer reçoit state actuel + action dispatchée dans le store et retourne le new state
