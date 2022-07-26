import { Component, Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, 
          MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'snack-bar-component-example',
  templateUrl: 'snack-bar-component-example.html',
})
export class SnackBarComponentExample {
  configSuccess: MatSnackBarConfig = {
    panelClass: 'style-success',
    duration: 10000,
    horizontalPosition: 'left',
    verticalPosition: 'bottom'
  };

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      data: 'Sample data',
      ...this.configSuccess
    });
  }
}


@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
})
export class PizzaPartyComponent {
  constructor( 
    public snackBarRef: MatSnackBarRef<PizzaPartyComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

    fun(){console.log("in fun()")}
   
}



/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */