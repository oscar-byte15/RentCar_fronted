import {Component, OnInit, ViewChild} from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Car} from "../../model/car";
import {BreakpointObserver} from "@angular/cdk/layout";
import {MatDrawer} from "@angular/material/sidenav";
import {FormGroup, FormControl} from "@angular/forms";
import {CarModelsService} from "../../services/car-models.service";
import {CarBrandsService} from "../../services/car-brands.service";

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css']
})
export class SearchCarComponent implements OnInit {
  rangePrices: number[] = [60, 160, 300, 500, 650];
  specifications: string[] = ["Air conditioning", "4+ doors"];
  transmissions: string[] = ["Manual", "Transmission"];
  categoriesOfCars: string[] = ["Little", "Medium", "Large", "Premium", "Minivan", "SUVs"];
  carsData: Car[];
  clientId: string | null;
  date: FormGroup;
  today: Date;

  @ViewChild(MatDrawer) drawer!: MatDrawer;

  constructor(private carsService: CarsService,
              private carModelsService: CarModelsService,
              private carBrandsService: CarBrandsService,
              private observer: BreakpointObserver) {
    this.carsData = [];
    this.clientId = localStorage.getItem('clientId');

    this.today = new Date();
    const day = this.today.getDate();
    const month = this.today.getMonth();
    const year = this.today.getFullYear();

    this.date = new FormGroup({
      start: new FormControl(new Date(year, month, day)),
      end: new FormControl(new Date(year, month, day))
    });
  }

  ngOnInit(): void {
    this.getAllCars();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.observer.observe(['(max-width: 1150px)'])
        .subscribe(response => {
          if (response.matches) {
            this.drawer.mode = 'over';
            this.drawer.close();
          } else {
            this.drawer.mode = 'side';
            this.drawer.open();
          }
        });
    }, 0);
  }

  getAllCars() {
    this.carsService.getAll().subscribe((response: any) => {
      this.carsData = response.content;

      for (let i = 0; i < this.carsData.length; i++) {
        this.getModelName(i, this.carsData[i].carModelId);
      }
    });
  }

  getModelName(index: number, carModelId: number): any {
    this.carModelsService.getById(carModelId).subscribe((response: any) => {
      this.carsData[index].model = response.name;
      this.getBrandName(index, response.carBrandId);
    });
  }

  getBrandName(index: number, carBrandId: number): any {
    this.carBrandsService.getById(carBrandId).subscribe((response: any) => {
      this.carsData[index].brand = response.name;
    });
  }
}
