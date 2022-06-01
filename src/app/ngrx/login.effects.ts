import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, mergeMap, map, catchError, of } from "rxjs";
import { AuthenticateService } from "../services/authenticate.service";
import { GetUserActionError, GetUserActionSuccess, LoginActions, LoginUserActionsTypes } from "./login.actions";

@Injectable()  //décorateur spéficie qu'il s'agit d'un service
export class LoginEffects {
    constructor(private authenticateService: AuthenticateService, private effectActions: Actions) {
    }


    LoginEffect: Observable<LoginActions> = createEffect(
        () => this.effectActions.pipe(
            ofType(LoginUserActionsTypes.GET_USER),
            mergeMap((action: LoginActions) => {
                return this.authenticateService.getUser(action.payload).pipe(
                    map((authUser) => new GetUserActionSuccess(authUser)),
                    catchError((err) => of(new GetUserActionError(err.message)))
                )
            })
        )
    );
}