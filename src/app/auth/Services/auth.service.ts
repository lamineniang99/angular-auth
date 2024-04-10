import { Injectable } from '@angular/core';
import { ParentService } from 'src/app/shared/Services/parent.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ParentService{


  isAuthentificated() : boolean {
    return localStorage.getItem('token')?true:false
  }
}
