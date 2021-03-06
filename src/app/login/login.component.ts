import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { RegisterService, User } from '../service/register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username=''
 password=''
 invalidLogin=false
 userlist:User[];

 userType='';
  constructor(private router: Router,
    private loginservice: AuthenticationService,private user:RegisterService) { }

  ngOnInit() {
    this.user.getUsers().subscribe(async res => {
      this.userlist = await res;
    }, error => alert(`${error.message}\nWaiting for response from server`))
  }

  checkLogin()
  {
    
    let flag=0;
    for(let i=0;i<this.userlist.length;i++)
    {
        
      if(this.username===this.userlist[i].userName&&this.password===this.userlist[i].userPassword)
        {
  
       sessionStorage.setItem('username',this.userlist[i].userName)
       sessionStorage.setItem('userType',this.userlist[i].userType)
       this.userType=this.userlist[i].userType;
          flag=1;
        break;
        }
    }
    
    if(flag===1 && this.userType==="ADMIN")
    {
      this.router.navigate(['/admin-landing-page'])
      this.invalidLogin=false
    }
    else if(flag===1&&this.userType==="USER")
    {
      console.log(this.userType);
      this.router.navigate(['/user-landing-page'])
      this.invalidLogin=false

    }
    else
    {
    this.invalidLogin=true
    alert("incorrect user name or password")
    }
  }
}











