import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: any;

  constructor() { 
    this.login = {
      user: '',
      password: '',
      politics: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("Comprobando los datos.");

    console.log(this.login);
  }

}
