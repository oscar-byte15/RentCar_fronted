import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../search-car/model/car";
import {MatDialog} from "@angular/material/dialog";
import {EditCarDialogComponent} from "../edit-car-dialog/edit-car-dialog.component";

@Component({
  selector: 'app-card-my-car',
  templateUrl: './card-my-car.component.html',
  styleUrls: ['./card-my-car.component.css']
})
export class CardMyCarComponent implements OnInit {
  @Input() car!: Car;
  @Input() clientId!: number;

  constructor(public editCarDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openEditDialogCar(): void {
    this.editCarDialog.open(EditCarDialogComponent, {
      width: "400px",
      data: {
        car: this.car,
        clientId: this.clientId,
        edit: true
      }
    })
  }
}
