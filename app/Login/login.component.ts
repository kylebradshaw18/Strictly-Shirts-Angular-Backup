import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  title = 'Tour of Heroes';

  //For Login Need to see if we have a customer id
  //If we do set this to their name
  //And when they click on their name it should bring them to there name
  //Else bring them to the login or create account screen
  login = 'Login';
}
