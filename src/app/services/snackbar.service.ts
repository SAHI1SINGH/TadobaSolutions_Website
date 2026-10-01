import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private matSnackBar:MatSnackBar) {

   }

   openSuccessSnackBar(message: string) {
    const config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: ['success-snackbar'],
    };
    this.matSnackBar.open(message, 'Close',config);
  }

  openFailedSnackBar(msg:string ) {
    const config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: ['failed-snackbar'],
    };
    this.matSnackBar.open(msg, 'Close',config);
  }


}
