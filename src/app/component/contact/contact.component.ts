import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContacService } from 'src/app/service/contac.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup
  name: AbstractControl
  email: AbstractControl
  subject : AbstractControl
  message : AbstractControl
  sub = false


  constructor(private fb: FormBuilder,
              private conctacService: ContacService) { 
    this.form = this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      subject:['', Validators.required],
      message:['', Validators.required]
    })
    this.name = this.form.controls['name']
    this.email = this.form.controls['email']
    this.subject = this.form.controls['subject']
    this.message = this.form.controls['message']
  }

  ngOnInit(): void {
    
  }

  get f(){
    return this.form.controls
  }

  sendMessage(){
    if(this.form.invalid)
     return 

     console.log(this.form.value)
     /*let dataSend = {
        name:this.form.get('name')?.value,
        email:this.form.get('email')?.value,
        subject :this.form.controls['subject'].value,
        message :this.form.controls['message'].value
     }*/

     this.conctacService.save( this.form.value).subscribe((res:any)=>{
       if(res.status)
         console.log("contacto creado")
     })
  }


}
