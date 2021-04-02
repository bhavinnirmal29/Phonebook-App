import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  contacts = [
    {fname:"Eric",lname:"Elliot",num:"222-555-6575"},
    {fname:"Steve",lname:"Jobs",num:"220-454-6754"},
    {fname:"Fred",lname:"Allen",num:"210-657-8786"},
    {fname:"Steve",lname:"Wozniak",num:"343-675-8786"},
    {fname:"Bill",lname:"Gates",num:"234-567-9789"}
  ]
  constructor() { }
  public getContacts():Array<{fname:string,lname:string, num:string}>{
    return this.contacts;
  }
  public createContact(contact){
    this.contacts.push(contact);
    contact={fname:"",lname:"",num:""};
  }
  public deleteContact(i:number){
    
    this.contacts.splice(i,1);
  }
}
