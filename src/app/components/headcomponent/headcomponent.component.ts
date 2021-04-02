import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {DataserviceService} from '../../services/dataservice.service';
@Component({
  selector: 'app-headcomponent',
  templateUrl: './headcomponent.component.html',
  styleUrls: ['./headcomponent.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HeadcomponentComponent implements OnInit {
  contact:any;
  contacts : {fname,lname,num} = {fname: "", lname: "", num:""};
  selectedContact;
  searchText:string;
  constructor(config: NgbModalConfig, private modalService: NgbModal,public dsc:DataserviceService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    this.dsc=dsc;
  }

  open(content) {
    this.modalService.open(content);
  }
  
  ngOnInit(): void {
    this.contact = this.dsc.getContacts();
  }

  createContact(){
    console.log(this.contact);
    this.dsc.createContact(this.contact);
    //this.contacts = {fname: "", lname: "", num: ""};
    
  }

  deleteContact(i:number){
    this.dsc.deleteContact(i);
  }

}
