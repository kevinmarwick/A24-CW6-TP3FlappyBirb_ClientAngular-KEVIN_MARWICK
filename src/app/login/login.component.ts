import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  registerUsername: string = "";
  registerEmail: string = "";
  registerPassword: string = "";
  registerPasswordConfirm: string = "";

  loginUsername: string = "2";
  loginPassword: string = "2";

  domain: string = "https://localhost:7166/"
  urlRegister: string = "api/users/register"
  urlLogin:string = "api/users/login"

  constructor(public route: Router, public http: HttpClient) { }

  ngOnInit() {
  }

  async login(): Promise<void>{
    let loginDTO = {
      username: this.loginUsername,
      password: this.loginPassword,
    };
    let x = await lastValueFrom(this.http.post<any>(this.domain+this.urlLogin, loginDTO))
    console.log(x)
    sessionStorage.setItem("token", x.token)

    // Redirection si la connexion a réussi :
    this.route.navigate(["/play"]);
  }

  

  async register(): Promise < void> {
  let registerDTO = {
    username: this.registerUsername,
    email: this.registerEmail,
    password: this.registerPassword,
    passwordConfirm: this.registerPasswordConfirm
  };

  let x = await lastValueFrom(this.http.post<any>(this.domain + this.urlRegister, registerDTO));
  console.log(x);
}


}
