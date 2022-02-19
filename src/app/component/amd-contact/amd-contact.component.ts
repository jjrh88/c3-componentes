import { Component, OnInit } from '@angular/core';
import { ContacService } from 'src/app/service/contac.service';
import { io, Socket} from 'socket.io-client';
import { config } from 'src/app/config/config';


@Component({
  selector: 'app-amd-contact',
  templateUrl: './amd-contact.component.html',
  styleUrls: ['./amd-contact.component.css']
})
export class AmdContactComponent implements OnInit {

  updatedSend: any
  reverseData: any
  listContact: any[] = []
  
  config = config
  socket: Socket 

 
  constructor(private conctacService: ContacService) {
                this.socket = io(this.config.url)
                this.obtenerRespuesta()
              }

  ngOnInit(): void {
    this.getContacts()
  }

  obtenerRespuesta(){
    this.socket.on('emitiendo',(data)=>{
      this.getContacts()
    })
  }

  getContacts(){
    this.conctacService.get().subscribe((res:any)=>{
      res.forEach((i:any) => {
        i.textAction = "Editar"
      });
      this.listContact = res
    })
  }

  search(event: any){
    this.conctacService.search({ name: event.target.value }).
    subscribe((res:any)=>{
      res.forEach((i:any) => {
        i.status = false
      });
      this.listContact = res
    })
  }

  reset(index: any){
    console.log( this.reverseData )
    /*this.listContact[index] = this.reverseData
    this.listContact[index]['status'] = false
    this.updatedSend = null*/
  }

  edit(item?: any, index?: any){
    if(typeof this.updatedSend === "object" && this.updatedSend != null ){
      this.update()
    }else{
        this.listContact.forEach(i => {
        i.status = false
        i.textAction = "Editar"
        if(i._id == item._id){
          i.status = true
          i.textAction = "Guardar"
        }
      });
    }
  }

  change(item:any, event: any, index: any , propiedad: any){
    this.listContact[index][propiedad] = event.target.value
    this.updatedSend = this.listContact[index] 
    /*this.listContact.forEach(i => {
      if(i._id == item._id){
        i[propiedad] =  event.target.value
      }
    });*/
  }
 
  update(){
    this.conctacService.update(this.updatedSend).subscribe((res:any)=>{
      console.log( res )
      this.updatedSend = null
    })
  }

  delete(_id:string){
    console.log( _id )
    this.conctacService.deleteById(_id).subscribe((res:any)=>{
      this.getContacts()
    })
  }

  findById(_id: string){
    console.log( _id )
    this.conctacService.findById(_id).subscribe((res:any)=>{
      console.log( res )
    })
  }
}
