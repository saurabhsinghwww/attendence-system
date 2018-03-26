import { Component } from '@angular/core';

/***
 * The component responsible for loading the attendence template, pass date and employee information to it.
 * 
 * @author Saurabh
 * @version 1.0
 * */
@Component({
  selector: 'app',
  templateUrl: "./app/app.html"
})
export class AppComponent {

  private static readonly MONTH_NAMES: Array<string> = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  
  private employee: String = "Saurabh";
  private month: number = 3;
  private year: number = 2018;

  onPrevious () {

    if (this.month == 1) {
      this.month = 12;
      this.year = this.year - 1;
    } else {
      this.month = this.month -1;
    }

  }

  onNext () {
    
    if (this.month == 12) {
      this.month = 1;
      this.year = this.year + 1;
    } else {
      this.month = this.month + 1;
    }

    console.log(this.month);
    
  }

  getMonth () {
    return AppComponent.MONTH_NAMES[this.month-1];
  }

}