import { Injectable } from '@angular/core';
import { io, Socket} from 'socket.io-client';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService{
  config = config
  socket: Socket 

  constructor()
  {
    this.socket= io(this.config.url)
  }

  saveNewContac(data: any)
  {
    this.socket.emit('newcontact', data)
  }
}
