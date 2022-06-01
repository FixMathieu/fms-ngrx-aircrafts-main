import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { GetUserAction } from 'src/app/ngrx/login.actions';
import { LoginStateEnum } from 'src/app/ngrx/login.state';

import { AuthenticateService } from 'src/app/services/authenticate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 myForm : FormGroup;
 error  = null;
 currentUser$ :Observable<User> | null=null;


 readonly loginStateEnum = LoginStateEnum;
  constructor(private store:Store<any>) { 
   
    this.myForm = new FormGroup({
      email : new FormControl(""),
      password : new FormControl("")
    })
    }
    ngOnInit(): void {
        
    }
    onLogin(myForm : FormGroup){
      this.store.dispatch(new GetUserAction(myForm));
      /* if(this.store.dispatch(new GetUserAction(myForm))==null){
        console.log("ok");
      } */

      

      
    
    }
  

}
