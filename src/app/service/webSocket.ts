import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService{
  
  constructor(private socket: Socket)
  {

  }

  contact(data: any)
  {
    this.socket.emit('', data)
  }

}
