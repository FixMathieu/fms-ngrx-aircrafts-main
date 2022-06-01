import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http:HttpClient) { }

  
  public getUser(myForm:FormGroup):Observable<User>{
    
    return this.http.get<User>(environment.host+"/users/?email=" + myForm.value.email + "&?password=" + myForm.value.password);
    
  }
}
