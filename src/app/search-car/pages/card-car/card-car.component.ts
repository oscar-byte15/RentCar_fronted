import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {RentDialogComponent} from "../rent-dialog/rent-dialog.component";

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.css']
})
export class CardCarComponent implements OnInit {
  @Input() car!: Car;
  @Input() clientId!: string | null;
  days: number = 1;
  moreInformationUrl!: string;

  constructor(private router: Router, public rentDialog: MatDialog) {}

  ngOnInit(): void {
    this.moreInformationUrl = `${this.router.url}/car/${this.car.id}`;
  }

  getPrice(): number {
    return this.days * this.car.rentAmountDay;
  }

  openRentDialog(): void {
    this.rentDialog.open(RentDialogComponent, {
      width: '300px',
      data: {
        car: this.car,
        clientId: this.clientId
      }
    });
  }
}
