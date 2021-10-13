import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  registerForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private authSer: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onRegister(){
    const { email, password } = this.registerForm.value;
   

    try{
      const user = await  this.authSer.register(email,password);
      if(user){
          this.router.navigate(['/list'])
      }
    }
    catch(error){
      console.log(error);
    }
  }

}
