import { Component, OnInit } from '@angular/core';
import { RentCarService } from "../../../search-car/services/rent-car.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";
import {EditDateDialogComponent} from "../edit-date-dialog/edit-date-dialog.component";

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {

  //rentsData: MyReservations[];
  displayedColumns: string[];
  clientId!: string | null;
  today: Date;
  deleted: boolean;
  changed: boolean;
  editableItem: boolean;

  menuOptions = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
  ]

  constructor(
    //private myReservationService: RentsService,
    private dialog: MatDialog
  ) {
    //this.rentsData = [];
    this.clientId = localStorage.getItem('clientId');
    this.displayedColumns = ['car', 'name', 'rate', 'startDate','finishDate','paymentAmount','actions']
    this.today = new Date();
    this.deleted = false;
    this.changed = false;
    this.editableItem = false;
  }

  ngOnInit(): void {
    this.retrieveRentals();
  }

  retrieveRentals(){
    /*this.myReservationService.getByClientId(this.clientId).subscribe((response: any) => {
      this.rentsData = response;
    })*/
  }

  compareDates(startDate: any, id: any) {
    const tempArray = startDate.split('/');
    const formattedStartDate = new Date(tempArray[2],tempArray[1] - 1,tempArray[0]);

    if(formattedStartDate > this.today) {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
                          data: {
                            id: id,
                            deleted: this.deleted
                          }
                        });

      dialogRef.afterClosed().subscribe((result) => {
        this.deleted = result
        if(result){
          this.retrieveRentals()
        }
      });
    }
    else
      alert("You cannot delete this rent, because the dates are past")
  }

  async updateRate(id: any, rate: any){
    /*await this.myReservationService.partialUpdate(id, {"rate":rate}).subscribe((response: any) => {
      this.retrieveRentals();
    });*/
  }

  changeDates(start: any, end: any, id: any, amount: any){
    const tempArray = start.split('/');
    const formattedStartDate = new Date(tempArray[2],tempArray[1] - 1,tempArray[0]);

    if(formattedStartDate > this.today) {
      const dialogRef = this.dialog.open(EditDateDialogComponent, {
        data: {
          id: id,
          start: start,
          end: end,
          amount: amount,
          changed: this.changed
        }
      });

      dialogRef.afterClosed().subscribe((result) => {
        this.changed = result
        if(result){
          this.retrieveRentals()
        }
      });
    }
    else
      alert("You cannot delete this rent, because the dates are past")
  }


}
