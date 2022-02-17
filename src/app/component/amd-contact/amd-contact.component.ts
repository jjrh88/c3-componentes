import { Component, OnInit } from '@angular/core';
import { ContacService } from 'src/app/service/contac.service';

@Component({
  selector: 'app-amd-contact',
  templateUrl: './amd-contact.component.html',
  styleUrls: ['./amd-contact.component.css']
})
export class AmdContactComponent implements OnInit {

  listContact: any[] = []
  constructor(private conctacService: ContacService) { }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts(){
    this.conctacService.get().subscribe((res:any)=>{
      this.listContact = res
    })
  }

}
