import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  constructor() { }

  sendReminder(datetime: any, message: string) {
    alert("Reminder for " + datetime + "\n" + message)
  } 
}
