import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  login: any;
  password: any;


  constructor() { }

  ngOnInit(): void {
  }

  public loginUser() {
    console.log(this.login, this.password);
  }


}
