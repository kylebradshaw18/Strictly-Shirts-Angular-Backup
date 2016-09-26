import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ngInit}

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls:['login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router) { }
  //For Login Need to see if we have a customer id
  //If we do set this to their name
  //And when they click on their name it should bring them to there name
  //Else bring them to the login or create account screen
  login(){
    let link = ['/home'];
    this.router.navigate(link);
  }

}
