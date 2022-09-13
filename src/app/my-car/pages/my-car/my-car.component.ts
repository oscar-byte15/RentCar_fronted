import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Car} from "../../../search-car/model/car";
import {ClientService} from "../../../my-profile/services/client.service";
import {MatDialog} from "@angular/material/dialog";
import {EditCarDialogComponent} from "../edit-car-dialog/edit-car-dialog.component";
import {CarsService} from "../../../search-car/services/cars.service";
import {CarModelsService} from "../../../search-car/services/car-models.service";
import {CarBrandsService} from "../../../search-car/services/car-brands.service";

@Component({
  selector: 'app-my-car',
  templateUrl: './my-car.component.html',
  styleUrls: ['./my-car.component.css']
})
export class MyCarComponent implements OnInit {
  clientId!: number;
  clientCars!: Car[];

  constructor(private clientService: ClientService,
              private carsService: CarsService,
              private carModelsService: CarModelsService,
              private carBrandsService: CarBrandsService,
              private editCarDialog: MatDialog) {
    this.clientId = parseInt(<string>localStorage.getItem('clientId'));
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    /*this.clientService.getCarsByIdClient(this.clientId).subscribe((response: any) => {
      this.clientCars = response;
    });*/
    this.carsService.getCarsByClientId(this.clientId).subscribe((response: any) => {
      this.clientCars = response.content;

      for (let i = 0; i < this.clientCars.length; i++) {
        this.getModelName(i, this.clientCars[i].carModelId);
      }
    });
  }

  getModelName(index: number, carModelId: number): any {
    this.carModelsService.getById(carModelId).subscribe((response: any) => {
      this.clientCars[index].model = response.name;
      this.getBrandName(index, response.carBrandId);
    });
  }

  getBrandName(index: number, carBrandId: number): any {
    this.carBrandsService.getById(carBrandId).subscribe((response: any) => {
      this.clientCars[index].brand = response.name;
    });
  }

  openEditDialogCar(): void {
    /*const car: Car = {
      id: uuid(),
      address: "",
      brand: "",
      year: 2021,
      model: "",
      mileage: 0,
      seating: 4,
      manual: true,
      carValueInDollars: 0,
      extraInformation: "",
      imagePath: "car.png",
      rate: 0,
      rentAmountDay: 0,
      clientId: this.clientId
    }*/

    const dialogRef = this.editCarDialog.open(EditCarDialogComponent, {
      width: "400px",
      data: {
        //car: car,
        clientId: this.clientId,
        edit: false
      }
    });

    dialogRef.afterClosed().subscribe((response: any) => {
      if (response !== undefined) {
        this.clientCars = this.clientCars.concat(response);
      }
    })
  }


}
