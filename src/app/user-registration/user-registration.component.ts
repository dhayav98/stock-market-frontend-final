import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private registerSevice:RegisterService,private router:Router) { }

  ngOnInit() {
  }
   onSubmit(registerFrom) {
     console.log(registerFrom.value);
     this.registerSevice.registerUser(registerFrom.value)
     .subscribe( data => {
       alert("registered successfully.");
       this.router.navigate(['login'])
     });
  
   }
}





