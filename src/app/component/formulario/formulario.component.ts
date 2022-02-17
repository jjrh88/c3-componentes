import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  form: FormGroup
  nombre: AbstractControl
  documento: AbstractControl
  email: AbstractControl
  submitted = false


  //crear un campo pare email o correo
  
  constructor(private fb: FormBuilder) {
    //construyendo el formulario
     this.form = this.fb.group({
      nombre:['',  Validators.required],
      documento:['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      //agregar nuevo campo email o correo
     })

     this.nombre = this.form.controls['nombre']
     this.documento = this.form.controls['documento']
     this.email = this.form.controls['email']
   }

  ngOnInit(): void {
  }

  //retorna los elementos o controles del formulario
  get getForm(){
    return this.form.controls
  }

  get emailValidate() { return this.form.get('email') }
 
  enviar(){
    this.submitted = true
    if(this.form.invalid)
     return

    console.log(this.form.value)

  }

}
