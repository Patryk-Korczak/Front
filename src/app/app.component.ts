import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private router:Router) {
  }
  title = 'Portal Aukcyjny';


  isLoginOrRegisterPage() {
    return this.router.url === "/login" || this.router.url === "/register";
  }
}


