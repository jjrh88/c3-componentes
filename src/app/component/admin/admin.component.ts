import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user: any
  rol: any
  modules: any

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.getInfo()
  }
  
  getInfo(){
    this.user = this.storageService.user
    this.rol = this.storageService.rol
    this.modules = this.storageService.modules
    console.log( this.modules )
  }

}
