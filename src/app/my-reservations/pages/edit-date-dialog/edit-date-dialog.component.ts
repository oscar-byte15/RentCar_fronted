import {Component, Inject, OnInit} from '@angular/core';
//import {RentsService} from "../../services/rents.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

export interface DialogData {
  id: string,
  changed: boolean,
  start: string,
  end: string,
  amount: number
}

@Component({
  selector: 'app-edit-date-dialog',
  templateUrl: './edit-date-dialog.component.html',
  styleUrls: ['./edit-date-dialog.component.css']
})
export class EditDateDialogComponent implements OnInit {
  date: FormGroup;
  formattedStartDate: any;
  formattedFinishDate: any;
  tempArrayStart: any;
  tempArrayFinish: any

  constructor(
    //private myReservationService: RentsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.tempArrayStart = this.data.start.split('/');
    this.formattedStartDate = new Date(this.tempArrayStart[2],this.tempArrayStart[1] - 1, this.tempArrayStart[0]);

    this.tempArrayFinish = this.data.end.split('/');
    this.formattedFinishDate = new Date(this.tempArrayFinish[2],this.tempArrayFinish[1] - 1, this.tempArrayFinish[0]);

    this.date = new FormGroup({
      start: new FormControl(this.formattedStartDate),
      end: new FormControl(this.formattedFinishDate)
    });
  }

  ngOnInit(): void {
    console.log(this.data.amount/this.getInitialDaysDiff());
  }

  getDaysDiff(): number {
    const startDate: Date = this.date.value.start;
    const finishDate: Date = this.date.value.end ? this.date.value.end : this.date.value.start;
    return Math.floor(Math.abs(<any>startDate - <any>finishDate) / (1000*60*60*24)) + 1;
  }

  getInitialDaysDiff(): number {
    const startDate: Date = this.formattedStartDate;
    const finishDate: Date = this.formattedFinishDate;
    return Math.floor(Math.abs(<any>startDate - <any>finishDate) / (1000*60*60*24)) + 1;
  }

  getDateFormat(date: Date): string {
    if (date === null) return "";

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  getPaymentAmount(): number {
    return this.getDaysDiff() * (this.data.amount / this.getInitialDaysDiff());
  }

  async updateDates() {
    /*await this.myReservationService.partialUpdate(
      this.data.id, {
        "startDate": this.getDateFormat(this.date.value.start),
        "endDate": this.getDateFormat(this.date.value.end),
        "paymentAmount": this.getPaymentAmount()
      })
      .subscribe((response: any) => {
        console.log(response)
        this.data.changed = true
      });*/
  }

}
