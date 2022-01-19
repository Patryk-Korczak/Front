import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {isEmpty} from "rxjs/operators";
import {combineTransforms} from "@angular/cdk/drag-drop/drag-styling";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  login: any;
  password: any;
  email: any;
  repeatPassword: any;
  name: any;
  postalNumber: any;
  cityName: any;
  streetName: any;
  homeNumber: any;
  surname: any;

  readonly ADD_USER_URL = "http://localhost:8080/portal/addUser";
  postData = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  registerUser(login:any, password:any, email:any, repeatPassword:any, name:any, postalNumber:any, cityName:any,
               streetName:any, homeNumber:any, surname:any) {
    if(!login || !password || !email) {
      window.alert("Dane podstawowe nie mogą być puste!");
    } else if(password!=repeatPassword) {
      window.alert("Hasła muszą być jednakowe!");
    }

    this.postData = {
      login: login,
      password: password,
      email: email,
      repeatPassword: repeatPassword,
      name: name,
      postalNumber: postalNumber,
      cityName: cityName,
      streetName: streetName,
      homeNumber: homeNumber,
      surname: surname
    }

    this.http.post<string>(this.ADD_USER_URL, this.postData).subscribe(data => {
      let params = new HttpParams();
    });

  }

}
