import { Component } from '@angular/core';
import { Customer } from './Customer';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'sandbox',
  
  template: `<h1>...</h1>
  <div class="container">
  <form (submit)="onFuckSubmit(isEdit)" >
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" [(ngModel)]="user.name" 
      name="name" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" [(ngModel)]="user.email" 
      name="email" />
    </div>

    <div class="form-group">
      <label>Phone</label>
      <input type="text" class="form-control" [(ngModel)]="user.phone" 
      name="phone" />
    </div>
    <input type="submit" class="btn btn-success" />
  </form>
  </div>
  <div class="container">
  <div *ngFor="let user of users" >
      <div class="well" >
        <ul class="list-group" >
          <li class="list-group-item">Name: {{user.name}}</li>
          <li class="list-group-item">Email: {{user.email}}</li>
          <li class="list-group-item">Phone: {{user.phone}}</li>
        </ul>
        
       
        <button class="btn btn-primary btn-sm" (click)="onEditClick(user)">Edit</button>
        <button class="btn btn-danger btn-sm" (click)="onDeleteClick(user.id)">Delete</button>
      </div>


      <hr>
  
  </div>

  </div>
  
  `

//   template: `<h1>...</h1>
//   <ul class="list-group">
//   <li class="list-group-item" *ngFor="let d of data" >{{d}}</li>
// <ul>
  
//   `
  // template: `<h1>...</h1>


  // `
//   template: `<h1>...</h1>
//   <button id="btn_first" (click)="fireEvent($event)">Click</button> 
//   <button id="btn_second" (mouseover)="fireEvent($event)">Mouseover</button> 
//   <button id="btn_third" (mousedown)="fireEvent($event)">Mousedown</button> 
//   <button id="btn_fouth" (mouseup)="fireEvent($event)">Mouseup</button> 
//   <button id="btn_fifth" (dblclick)="fireEvent($event)">Double Click</button> 
//   <button id="btn_sixth" (drag)="fireEvent($event)">Drag</button> 
//   <button id="btn_sixth" (dragover)="fireEvent($event)">Drag Over</button>

  
//   <button id="btn_seventh" (click)="changeValue()">Change Value</button> 

//   <div *ngIf="value">
//     <h1>{{text}}</h1>
//   </div>

  

//   <div>
//     <input type="text" (keyup)="fireEventInput($event)" placeholder="KeyUp"/>
//   </div>

//   <div>
//     <input type="text" (keydown)="fireEventInput($event)" placeholder="KeyDown"/>
//   </div>

//   <div>
//     <input type="text" (focus)="fireEventInput($event)" placeholder="Focus"/>
//   </div>

//   <div>
//     <input type="text" (blur)="fireEventInput($event)" placeholder="Blur"/>
//   </div>

//   <div>
//     <input type="text" (cut)="fireEventInput($event)" placeholder="Cut"/>
//   </div>

//   <div>
//     <input type="text" (copy)="fireEventInput($event)" placeholder="Copy"/>
//   </div>

//   <div>
//     <input type="text" (paste)="fireEventInput($event)" placeholder="Paste"/>
//   </div>

//   <hr>
// <div>
//   <input type="text" (keyup)="changeText($event)" placeholder="KeyUp changeText"/>
// </div>

// <h1>{{ textInp }}</h1>

// <hr>
// <div class="container">
// <form (submit)="onSubmit()" >
// <div class="form-group">
//   <label>Name</label>
//   <input type="text" [(ngModel)]="name" name="name" class="form-control" />
// </div>

// <div class="form-group">
//   <label>Age</label>
//   <input type="number"  [(ngModel)]="age" name="age"  class="form-control" />
// </div>
// <input type="submit" class="btn btn-success" value="Submit"/>
// </form>

// <h4>Name: {{name}}</h4>

// <h4>Age: {{age}}</h4>

// <ul class="list-group">
// <li class="list-group-item" *ngFor="let user of users">{{user}}</li>
// </ul>

// </div>

// <hr>

// <div class="container">
// <h1>Second Hello</h1>
// <form novalidate #f="ngForm" (ngSubmit)="onNewSubmit(f)" >
// <div class="form-group">
//   <label>Name</label>
//   <input 
//   type="text" 
//   class="form-control" 
//   [(ngModel)]="newUser.newName" 
//   name="newName"  
//   #userName="ngModel"  
//   minlength="2" 
//   required />
// </div>
// <div *ngIf="userName.errors?.required && userName.touched" class="alert alert-danger" >
// Name is required.
// </div>

// <div *ngIf="userName.errors?.minlength && userName.touched" class="alert alert-danger" >
// Name should be at least 2 characters.
// </div>

// <div class="form-group">
// <label>Email</label>
// <input type="text" [(ngModel)]="newUser.newEmail" name="newEmail"  #userEmail="ngModel" class="form-control"  required />
// </div>
// <div *ngIf="userEmail.errors?.required && userEmail.touched" class="alert alert-danger" >
// Email is required.
// </div>

// <div class="form-group">
// <label>Phone</label>
// <input type="text" [(ngModel)]="newUser.newPhone" name="newPhone"  #newPhone="ngModel" class="form-control" minlength="10"/>
// </div>
// <div *ngIf="newPhone.errors?.minlength && newPhone.touched" class="alert alert-danger" >
// Phone number should be at least 10 characters.
// </div>
// <input class="btn btn-success" type="submit" value="Submit" />

// </form>

// </div>





  
// `





  // template: `<h1>Hello World</h1>
  
  //           <p>My birthday is {{birthday | date | uppercase}}</p>
  //           <p>My birthday is {{birthday | date:"MM-dd-yyyy"}}</p>
  //           <p>I was born in {{birthday | date:"yyyy"}}</p>
  //           <p>I love {{ 'Programming' | uppercase}}</p>
  //           <p>I hate {{ 'Spider' | lowercase}}</p>
  //           <p>Total is  {{ total | currency:"THB":"1"}}</p>
  //           <p>a fee is {{fee | percent }}</p>
  
  // `
  
  
  
  
  // template: `<h1>Hello World</h1>

  //           <div [style.font-size]="isSpecial ? 'x-large' : 'small'">Font size depend on isSpecial</div>

  //           <div [ngStyle]="currentStyle" >This is initially savable and special</div>

  // `

  // template: `<h1>Hello World</h1>
  //           <h4 [class.special]="isSpecial">This class binding is special</h4>
  //           <h4 [ngClass]="currentClasses">This div is initailly special and savable</h4>
  // `


  // styles:[`
  
  // .special{
  //   color:green;
  //   font-size:20px;
  // }

  // .savable{
  //   text-transform:uppercase;
  // }
  
  // `]



  // template: `<h1>Hello World</h1>
  //         <!--
 
  //         3 way to bind properties
          
  //         <div><img src="{{imageUrl}}" /></div>

  //         <div><img [src]="imageUrl" /></div>

  //         <div><img bind-src="imageUrl" /></div>

  //         <h4>Image Location: <span [textContent]="imageUrl"></span></h4>
  //         -->

  //         <hr>
  //         <h2>Create Post</h2>

  //         <p [hidden]="isUnchaged">Post has been change</p>

  //         <button [disabled]="isUnchaged">Save</button>

  // `




  // template: `<h1> Hello 
  //     <!--
  //     <span *ngIf="showName" > {{name}} !!</span>
  //     <span *ngIf="!showName" > Guest !!</span>
  //     -->

  //     <span *ngIf="showName; else noName" > {{name}} !!</span>
  //     <ng-template #noName>Guest</ng-template>

  //     <p>Hello {{ showName ? name : 'Guest'}}</p>

  //     <hr>
  //     <div [ngSwitch]="greeting">
  //         <div *ngSwitchCase="'1'">Hello World</div>
  //         <div *ngSwitchCase="'2'">Hi there!</div>
  //         <div *ngSwitchCase="'3'">What's up</div>
  //         <div *ngSwitchDefault>Hello</div>
  //     </div>

  // </h1>`



  // {{people}}
  // <ul>
  //   <li *ngFor="let person of people">
  //         {{person}}
  //   </li>
  // </ul>

  // <ul>
  //   <li *ngFor="let person of people; let i = index">
  //         {{i+1}} {{person}}
  //   </li>
  // </ul>

  // <ul>
  //   <li *ngFor="let person_each of peopleObj; let i = index">
  //         {{i+1}} {{person_each.firstName}} {{person_each.lastName}}
  //   </li>
  // </ul>


  // templateUrl: './sandbox.component.html',

  // styleUrls: ['./sandbox.component.css']


  // styles: [`
  
  //   .special {
  //     color: green;
  //     font-size:20px;
  //     text-transform:uppercase
  //   }

  // ------------------------------------------------------------------------------------------
  // template: `
  
  // <h1>{{name}}!! is {{age}} years old.</h1>
  // <h2>My company: {{person.company}} , since: {{person.since}}</h2>
  // <ul>
  //   <li>{{'Hello World'}}</li>
  //   <li>{{1+1}}</li>
  //   <li>{{showAge()}}</li>
  // </ul>
  // `
  // ------------------------------------------------------------------------------------------
})

export class SandboxComponent{

  user = {
    id:'',
    name: '',
    email: '',
    phone:''
  }
  isEdit:boolean = false;

  users:any[];


  constructor(public dataService:DataService) {
    this.dataService.getUsers().subscribe(users => {
      // console.log(users);
      this.users = users;
    });
  }

  onFuckSubmit(isEdit){
    if(isEdit){
      this.dataService.updateUser(this.user).subscribe(user => {
        for(let i = 0; i < this.users.length;i++){
          if(this.users[i].id === this.user.id){
            this.users.splice(i,1);
          }
        }
        console.log(user);
        this.users.unshift(this.user);
      });
     // this.isEdit = false;
    }else{
      this.dataService.addUsers(this.user).subscribe(user => {
        console.log(user);
        this.users.unshift(user);
      });
    }
   
  }

  onDeleteClick(id){
    console.log(id);
    this.dataService.deleteUser(id).subscribe(res => {
      console.log(res);
      for(let i = 0; i < this.users.length;i++){
        if(this.users[i].id === id){
          this.users.splice(i,1);
        }
      }
  });
}

onEditClick(user){
  this.isEdit = true;
  this.user = user;
}

  // users:string[];
  // constructor(public dataService:DataService) {
  //   this.users = this.dataService.getUsers();
  //   console.log(this.users);
  // }

  // data:any[] = [];

  // constructor(public dataService:DataService) {
  //   this.dataService.getData().subscribe(data => {
  //     // console.log(data);
  //     this.data.push(data);
  //   });
  // }




  // users:string[] = ['Anuwat','Pansa','Surachad','Chatchai'];

  // name:string = "";
  // age:number = 0;

  // text:string = "Hello World";
  // value:boolean = true;
  // textInp:string = "Hello World";

  // fireEvent(e){
  //   // console.log('Btn clicked!!');
  //   // console.log(greeting);
  //   console.log(e.target);

  // }

  // changeValue(){
  //   //this.text = "Goodbye World";
  //   this.value = !this.value;
  // }

  // fireEventInput(e){
  //   console.log(e.target);
  // }

  // changeText(e){
  //   this.textInp = e.target.value;
  // }

  // onSubmit(){
  //   console.log("Name: " + this.name + " Age: " + this.age);
  //   this.users.push(this.name);
  //   console.log(this.users);
  //   this.name = "";
  // }


  // newUser = {
  //   newName:'',
  //   newEmail:'',
  //   newPhone:''
  // }

  // onNewSubmit({value,valid}){
  //   if(valid){
  //     console.log(value);
  //   }else{
  //     console.log('From is invalid.');
  //   }
  // }

  


  // birthday = new Date(1995,11,4);
  // total = 500;
  // fee = 0.5;



  // isSpecial = true;
  // canSave = true;
  // currentStyle = {};     


  // constructor() {
  //   this.setCurrentClasses();
  // }

  // setCurrentClasses(){
  //   this.currentStyle = {
  //     'font-style':this.canSave ? 'italic' : 'normal',
  //     'font-size':this.isSpecial ? '24px' : '12px'
  //   }
  // }







  // isSpecial = true;
  // canSave = true;
  // currentClasses = {};

  // constructor() {
  //   this.setCurrentClasses();
  // }

  // setCurrentClasses(){
  //   this.currentClasses = {
  //     savable: this.canSave,
  //     special: this.isSpecial
  //   }
  // }



  // imageUrl = 'http://lorempixel.com/400/200';
  // isUnchaged:boolean = true;

  // name:string = 'Anuwat';
  // showName:boolean = false;
  // greeting:number = 4;


  // people = ['Anuwat','Pansa','Surachad','Chatchai'];

  // peopleObj = [
  //   {firstName: 'Anuwat',lastName: 'Khongchuai'},
  //   {firstName: 'Pansa',lastName: 'jitbunjong'},
  //   {firstName: 'Surachad',lastName: 'Chimchin'},
  //   {firstName: 'Chatchai',lastName: 'Saelim'}
  // ]

  // constructor() {
  //   this.people[2] = 'Thanaphon';
    
  // }



  // customer:Customer;
  // customers:Customer[];

  // constructor() {
  //   this.customer = {
  //     id:1,
  //     name: '1nuwat.k',
  //     email: '1oot@haxtivitiez.net'
  //   }

  //   this.customers = [
  //     {
  //       id:2,
  //       name: '2nuwat.k',
  //       email: '2oot@haxtivitiez.net'
  //     },
  //     {
  //       id:3,
  //       name: '3nuwat.k',
  //       email: '3oot@haxtivitiez.net'
  //     },
  //     {
  //       id:4,
  //       name: '4nuwat.k',
  //       email: '4oot@haxtivitiez.net'
  //     }
  //   ]
  // }




  // name:string = 'Anuwat.k';
  // age:number = 23;
  // hasChildren:boolean = true;
  // state:any = 'Thailand';
  // myNumbersArray:number[] = [1,2,3];
  // myStringsArray:string[] = ['Cat','Rat','Dog'];
  // myAnyArray:any[] = [true,'false',0,1.0,{name:'Anuwat',userName:'un4'}];
  // myTuple: [string,number] = ['one',1];
  // unusable: void = undefined;
  // u: undefined = undefined;
  // n: null = null;
  // constructor() {
  //   this.hasChildren = false;
  // }



  // ------------------------------------------------------------------------------------------
  // name = 'Anuwat.k';
  // age = 23;
  // person = {
  //   company: 'Haxtivitiez',
  //   since:'2015'
  // }

  // constructor() {
  //   console.log('Constructor ran... ');
  //   this.person.company = 'NetMonsTerz';
  //   this.hasBirthday();
  //   this.hasBirthday();
  // }

  // hasBirthday(){
  //   this.age += 1;
  // }

  // showAge(){
  //   return this.age;
  // }
  // ------------------------------------------------------------------------------------------
}





