import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RemindersService } from '../core/reminders/reminders.service';

@Component({
  selector: 'app-reminder-dialog',
  templateUrl: './reminder-dialog.component.html',
  styleUrls: ['./reminder-dialog.component.css']
})
export class ReminderDialogComponent implements OnInit {

  reminderForm = this.fb.group({
    datetime: [null, Validators.required],
    message: [null, Validators.required],
  });

  reminderService: RemindersService;

  constructor(
    public dialogRef: MatDialogRef<ReminderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private fb: FormBuilder, _reminderService: RemindersService) { 
      this.reminderService = _reminderService;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
  
    openDetail(recipe : any): void {
      console.log(recipe)
      const dialogRef = this.dialog.open(ReminderDialogComponent, {
        width: '250px',
        data: {recipe: recipe}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result)
      });
    }
    
    ngOnInit(): void {}

    onSubmit(): void {
      this.reminderService.sendReminder(this.reminderForm.value.datetime, this.reminderForm.value.message)
    }

}
