import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  almacenarEstudiante : any[] = []
  nombre = "";
  numero = 2

  constructor() { }

  ngOnInit(): void {
  }

  capturar(){
    console.log(this.nombre)
  }

  calcularPromedio(){
    return 50/3
  }

  agrarEstudiante(){
     
    this.almacenarEstudiante.push({
        persona:this.nombre
      })
  }

  eliminar(item: any){
    for (let i = 0; i < this.almacenarEstudiante.length; i++) {
       if(this.almacenarEstudiante[i].persona == item.persona){
        this.almacenarEstudiante.splice(i,1)
       }
    }
  }
}
