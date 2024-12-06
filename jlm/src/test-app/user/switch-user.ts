import { Component } from "@angular/core";
import { signal } from '@angular/core';

interface IUser{
  id: number;
  name: string;
}

@Component({
  selector: 'switch-user',
  template: `
    <h2>Who am I?</h2>
    <p>{{this.activeUser().name}}
    <ul>
    @for (user of listUsers; track user.id ) {
      <li>
        <span>{{user.name}}</span>
        <button (click)="changeActiveUser(user)">Select me!</button>
      </li>
    }
    <ul>
    
    `,
})

export class SwitchUser {
  
  listUsers:IUser[] = [
    {id:1, name:'Morgan Freeman'}, 
    {id:2, name:'Tom Hanks'}, 
    {id:3, name:'Harrison Ford'}
  ]
  activeUser = signal(this.listUsers[0]);
  

  changeActiveUser(user:IUser) {
    this.activeUser.set(user);
  }

}