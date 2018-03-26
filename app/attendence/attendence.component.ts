import { Component, OnInit, Input } from '@angular/core';
import { AttendenceService } from '../services/attendence/attendence.services';

/***
 * The component responsible for rendering the attendence of the employee for given month.
 * 
 * @author Saurabh
 * @version 1.0
 * */
@Component({
  selector: 'attendence',
  templateUrl: "./app/attendence/attendence.html"
})
export class AttendenceComponent implements OnInit {

  private static readonly WEEK_NAMES = ["Sun", "Mon", "Web", "Thu", "Fri", "Sat"];

  private attendenceData: Array<Attendence>;

  constructor(private attendenceService: AttendenceService) { }

  @Input() employee: string;
  private _month: number = 3;
  private _year: number = 2018;

  /**
   * The method load the attendence data in case of month change.
   *  @param month
  */
  @Input()
  set month(month: number) {

    this._month = month;
    this.ngOnInit();

  }

  /**
   * The method load the attendence data in case of year change.
   *  @param year
  */
  @Input()
  set year(year: number) {

    this._year = year;
    this.ngOnInit();

  }

  /**
   * The method load the attendence data for given employee, year and month.
  */
  ngOnInit() {

    this.setDateRange(this.employee, this._year, this._month);

  }

  /**
   * The method load the attendence data for given employee, year and month.
   * 
   * @param employee
   * @param year
   * @param month
  */
  setDateRange(employee: string, year: number, month: number) {

    let dateRange = this.getDateRange(year, month);
    let startDate = dateRange[0].date;
    let endDate = dateRange[dateRange.length - 1].date;

    this.attendenceService
      .getAttendenceData()
      .subscribe(timeSpentData => {

        this.attendenceData = dateRange.map((data) => {

          let newData: Attendence = Object.assign({}, data);

          newData.timeSpent = timeSpentData[data.date];

          return newData;

        });

      }

      );

  };

  /**
   * The method prepares the dates for displaying on the template on change of year and month.
   * 
   * @param year
   * @param month
   * @return Array<Attendence>
  */
  getDateRange(year: number, month: number): Array<Attendence> {

    let now = new Date(year, month - 1, 1);

    let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    firstDay = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate());

    let lastSunday = new Date(firstDay.setDate(firstDay.getDate() - firstDay.getDay()));

    function addDays(date: Date, days: number) {

      var date = new Date(date.valueOf());
      date.setDate(date.getDate() + days);

      return date;

    }

    function getDates(startDate: Date, stopDate: Date) {

      let dateArray = new Array();
      let currentDate = startDate;

      while (currentDate <= stopDate) {

        let date = new Date(currentDate);

        dateArray.push({
          isCurrentMonth: (date.getMonth() == stopDate.getMonth()) ? true : false,
          displayDate: date.getDate() + ' ' + AttendenceComponent.WEEK_NAMES[(date.getDay() == 6) ? 0 : date.getDay()],
          date: date.toISOString().substr(0, 10)
        });

        currentDate = addDays(currentDate, 1);

      }

      return dateArray;

    }

    return getDates(lastSunday, lastDay);

  }

}
interface Attendence {

  isCurrentMonth: Boolean,
  displayDate: string,
  date: string
  timeSpent: number

}