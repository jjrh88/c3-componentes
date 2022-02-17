import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  //template: `<h1>Hola<h1>`,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  mostrarOcultar = false
  ocultar = true
  opc = 1
  /*
    POO: MODIFICADORES DE ACCESSO
    private: Privado: se accede desde la misma clase o paquete: { "a", "b", "c"}
      Se pueden definir variables, clases, intefaces
    public : Publico  
      Se pueden definir variables, clases, intefaces
  */

  //modelos 
  nombre = "";
  usuario = "";

  /*
   Utilidades()=> loading(), convertirCadenaABase64()
   Inyección de dependencias
  */


   /*Directivas: */
  constructor() { 
   //definicion o inicializacion de objetos
   /*alert("Por favor esperar 3 segundos para aparecer")
   setTimeout(() => {
     this.mostrarOcultar = true
   }, 3000);*/
  }

  

  ngOnInit(): void {
  
  }

  //funciones
  //camelcase :> Definir de forma clara su codigo fuente
  calcularEdad(){
    this.mostrarOcultar =! this.mostrarOcultar
 
  }

  capturarLoEscrito(evento?:any){
    console.log(this.nombre)
    //console.log(evento.target.value)
  }

  incrementar(){
    let aux = this.opc++
    
    this.validarDesdeUnNgClass(aux)
  }

  validarDesdeUnNgClass(opc?:number){
    console.log(this.opc)
    if(opc == null)
      opc = 2

    return opc;
   }

  probandoOcultarConHidden(){
    this.ocultar =! this.ocultar
  }
  definicionSwitch(opc: number){
    switch(opc){
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      default:
         console.log("Por favor ingrese una opción correcta!")
    }
  }
}
