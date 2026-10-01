import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faHouse, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../models/User';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, CommonModule, FormsModule,MatButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  user=faUser
  contact=faPhone
  email=faEnvelope
  password=faLock
  address=faHouse

 newUser:User=new User();

 onSubmit(form:NgForm){
  console.log("user Deails", this.newUser)
 }

}
