import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  users : {username : string, password : string}[] = [
    {username: 'admin', password: "admin"},
  ]

  login(username: string, password: string) : boolean {
    let user = this.users.find(x => x.username === username);
    if (user != undefined) {
      return user.password === password;
    }
    return false;
  }

  signup(username: string, password: string) : boolean {
    let user = this.users.find(x => x.username === username);
    if (user != undefined) {
      return false;
    }
    this.users.push({username: username, password: password})
    return true;
  }
}
