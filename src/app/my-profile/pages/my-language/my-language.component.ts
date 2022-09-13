import {Component, Input, OnInit} from '@angular/core';
import {Language} from "../../model/language";

@Component({
  selector: 'app-my-language',
  templateUrl: './my-language.component.html',
  styleUrls: ['./my-language.component.css']
})
export class MyLanguageComponent implements OnInit {
  @Input() userLanguage !: Language;
  @Input() languageId !: string;
  constructor() {
    this.userLanguage = {} as Language;
  }

  ngOnInit(): void {
  }

}
