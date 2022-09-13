import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../../search-car/model/car";

@Component({
  selector: 'app-fav-card-car',
  templateUrl: './fav-card-car.component.html',
  styleUrls: ['./fav-card-car.component.css']
})
export class FavCardCarComponent implements OnInit {
  @Input() car!: Car;
  moreInformationUrl!: string;

  constructor() { }

  ngOnInit(): void {
    this.moreInformationUrl = `/client/search/car/${this.car.id}`;
  }
}
