import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
options = [
  {id: 1, title:"Optimal Session Management for Web Applications"},
  {id: 2, title:"Secure Session Identifier Creation"},
  {id: 3, title:"Ensuring Secure Session Identifiers with Well-Vetted Algorithms"},
  {id: 4, title:"Enhancing Security: Cookie Domain and Path Configuration"},
  {id: 5, title:"Ensuring Complete Session Termination with Logout Functionality"},
  {id: 6, title:"Ensuring Secure Session Termination"},
  {id: 7, title:"Optimizing Security with Session Inactivity Timeout"},
  {id: 8, title:"Implementing Strict Session Management Policies"},
  {id: 9, title:"Ensuring Secure Session Transitions: Pre and Post Login"},
  {id: 10, title:"Enhancing Security: New Session Identifier on Re-authentication"},
  {id: 11, title:"Securing User Accounts: Prohibiting Concurrent Logins"},
  {id: 12, title:"Securing Session Identifiers: Best Practices"},
  {id: 13, title:"Ensuring Server-Side Session Data Security: Access Controls"},
  {id: 14, title:"Optimizing Security: Periodic Session Identifier Rotation"},
  {id: 15, title:"Securing Sensitive Operations: Per-Session Strong Random Tokens"},
  {id: 16, title:"Strengthening Cookie Security: Implementation of the Secure Attribute"},
  {id: 17, title:"Enhancing Cookie Security: Utilizing the HTTP Only Attribute"}
]
  topic: string = 'Session Management';

  constructor() { }

  ngOnInit(): void {
  }
  accessId(valueId:any){
  console.log('valueId :', valueId);

  }
  sessionManage(value: string){
  console.log('value :', value);
  this.topic = value;

  }

}
