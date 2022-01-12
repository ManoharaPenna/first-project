import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userPass: any = "1234";
  userName: any = "Hemanthmanu";
  email: any;
  pass: any;
  ngOnInit() {
  }
  onClickSubmit(data:any) {
    console.log('Username ', this.userName); //Hemanth
    console.log('passwd ', this.userPass); // 1234
    this.userName = data.emailid;


       
    this.userPass = data.passwd;
    console.log('Username ', this.userName); //Manohar
    console.log('passwd ', this.userPass); //123456
  }
  
 }

