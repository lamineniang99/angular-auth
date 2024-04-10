import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ResponseLogin } from '../../Interfaces/response-login';
import { Login } from '../../Interfaces/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  message : string = ''

  constructor(private authService : AuthService, private router : Router){}
  ngOnInit(): void {

  }

  onSubmit(signForm : NgForm) {
      this.authService.postData<ResponseLogin, Login>('/api/login', signForm.value).subscribe({
        next : (data) => {
          const user = data.data.user
          localStorage.setItem('user', JSON.stringify(user))
          localStorage.setItem('token', data.data.token)
          if (user.role === 'Client') {
              this.router.navigateByUrl('')
          }
          if (user.role === 'Admin') {
              this.router.navigateByUrl('admin')
          }
        },
        error : (err) => {
          console.log(err.error.message);
          this.message = err.error.message
        }
      })

  }

}
