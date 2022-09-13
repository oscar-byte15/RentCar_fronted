import {Component, Inject, OnInit} from '@angular/core';
import {Car} from "../../../search-car/model/car";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {CarsService} from "../../../search-car/services/cars.service";

export interface DialogDataCar {
  car: Car;
  clientId: string;
  edit: boolean;
}

@Component({
  selector: 'app-edit-car-dialog',
  templateUrl: './edit-car-dialog.component.html',
  styleUrls: ['./edit-car-dialog.component.css']
})
export class EditCarDialogComponent implements OnInit {
  transmissionControl!: FormControl;

  constructor(public dialogRef: MatDialogRef<EditCarDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogDataCar,
              private carService: CarsService) {
    this.transmissionControl = new FormControl(data.car.manual ? 'manual' : 'automatic');
  }

  ngOnInit(): void {
  }

  cancelOnClick() {
    this.dialogRef.close();
  }

  confirmAction(): void {
    if (this.data.edit) {
      this.data.car.manual = this.transmissionControl.value === "manual";
      this.carService.update(this.data.car.id, this.data.car).subscribe((response: any) => {
        console.log(response);
      });
    }
    else {
      /*this.carService.create(this.data.car).subscribe((response: any) => {
        console.log(response);
      });*/
    }
  }
}
