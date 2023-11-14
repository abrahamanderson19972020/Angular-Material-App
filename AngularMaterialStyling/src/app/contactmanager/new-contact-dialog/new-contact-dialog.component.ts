import { Note } from './../models/note.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.model';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss'],
})
export class NewContactDialogComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    avatar: '',
    bio: '',
    birthDate: new Date('1983-11-10'),
    notes: [],
  };
  avatars: string[] = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSave() {
    console.log(this.user);
    this.openSnackBar('New contact is added', 'Navigation')
      .onAction()
      .subscribe(() => {
        this.router.navigate(['/contactmanager', 2]);
      });
    this.dialogRef.close(this.user);
  }

  onCancel() {}
  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
