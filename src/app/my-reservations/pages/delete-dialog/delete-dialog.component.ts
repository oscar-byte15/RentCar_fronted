import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
//import {RentsService} from "../../services/rents.service";

export interface DialogData {
  id: string,
  deleted: boolean
}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    //private myReservationService: RentsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  ngOnInit(): void {

  }

  async deleteRental(){
    /*await this.myReservationService.delete(this.data.id).subscribe((response:any) => {
      this.data.deleted = true;
    })*/
  }

}
