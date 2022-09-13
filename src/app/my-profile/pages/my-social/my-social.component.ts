import {Component, Input, OnInit} from '@angular/core';
import {Social} from "../../model/social";

@Component({
  selector: 'app-my-social',
  templateUrl: './my-social.component.html',
  styleUrls: ['./my-social.component.css']
})
export class MySocialComponent implements OnInit {
  @Input() socialUser !: Social;
  @Input() socialId !: string;
  constructor() {
    this.socialUser = {} as Social;
  }

  ngOnInit(): void {
  }

}
