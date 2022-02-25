import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  //template: `<h1>Hola<h1>`,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup
  user: AbstractControl
  password: AbstractControl
  submited = false

  constructor(private fb: FormBuilder,
              private authService: AuthService
      ) { 
      this.form = this.fb.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
      })

      this.user = this.form.controls['user']
      this.password = this.form.controls['password']
   }

   ngOnInit(): void {
  
   }

   get f(){
     return this.form.controls
   }

   auth(){
      this.submited = true
      if(this.form.invalid)
       return

      this.authService.auth(this.form.value).subscribe((res:any)=>{
        console.log( res )
        if(res.status){
          sessionStorage.setItem('token',res.token)
          sessionStorage.setItem('user',res.userFound.user)
          sessionStorage.setItem('_id',res.userFound._id)
          sessionStorage.setItem('rol',res.rol)
        }
      })
   }
}
