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

  registerUsername : string = "";
  registerEmail : string = "";
  registerPassword : string = "";
  registerPasswordConfirm : string = "";

  loginUsername : string = "";
  loginPassword : string = "";

  domain: string = "https://localhost:7166/"
  urlRegister:string = "api/users/register"

  constructor(public route : Router, public http:HttpClient) { }

  ngOnInit() {
  }

  login(){

    // Redirection si la connexion a réussi :
    this.route.navigate(["/play"]);
  }

  async register(): Promise<void> {
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
