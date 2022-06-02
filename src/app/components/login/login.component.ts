import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { User } from 'src/app/model/user.model';
import { GetDesignedAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
import { GetUserAction } from 'src/app/ngrx/login.actions';
import { LoginStateEnum, LoginState } from 'src/app/ngrx/login.state';

import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 myForm : FormGroup;
 error  = null;

 currentUser$ :Observable<LoginState> | null=null;
 readonly loginStateEnum = LoginStateEnum;
  aircraftsState$: Observable<Aircraft[]> | null=null;

  constructor(private store:Store<any>, private authService: AuthenticateService, private router: Router) { 
   
    this.myForm = new FormGroup({
      email : new FormControl(""),
      password : new FormControl("")
    })
    }
    ngOnInit(): void {
        this.currentUser$ = this.store.pipe(//on écoute ce qui se passe dans le store, dès qu'on reçoit les données, on peut faire un map
          //dit autrement : nous recevons le state dès qu'il change afin de permettre l'affichage adéquat de ses données
          map((state)=> state.loginState)  
    );  
    }
    onLogin(myForm : FormGroup){
      console.log(myForm.value);
      this.store.dispatch(new GetUserAction(myForm))   
      // this.store.dispatch(new GetUserAction(Object.assign({}, myForm, {
      //   details: { closed: true }
        
        
      // })));  
    
    }
    routerToHome(){
      // console.log("hhh");
      
     this.router.navigateByUrl('aircrafts')
    }
  

}
