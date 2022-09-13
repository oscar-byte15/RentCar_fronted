import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../model/client";
import {ClientService} from "../../services/client.service";
import {Car} from "../../../search-car/model/car";
import {Comment} from "../../model/comment";
import {CommentsService} from "../../services/comments.service";
import {Language} from "../../model/language";
import {LanguageService} from "../../services/language.service";
import {Social} from "../../model/social";
import {SocialService} from "../../services/social.service";
import {MatDialog} from "@angular/material/dialog";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  clientUsers !: Client;
  currentUser !: string | null;
  userCars !: Car[];
  userComments !: Comment[];
  clientLanguages !: Language[];
  clientSocial !: Social[];


  constructor(private clientUsersService: ClientService, private commentsServices: CommentsService, private languagesServices: LanguageService, private socialService: SocialService, public editProfile: MatDialog) {
    this.clientUsers = {} as Client;
    this.currentUser = localStorage.getItem('clientId');
  }

  ngOnInit(): void {
    this.getUsers();
    this.getCars();
    this.getComments();
    this.getLanguages();
    this.getSocial();
  }

  getUsers() {
    this.clientUsersService.getById(this.currentUser).subscribe((response:any) => {
      this.clientUsers = response;
    })
  }
  getCars() {
    /*this.clientUsersService.getCarsByIdClient(this.currentUser).subscribe((response: any) => {
      this.userCars = response;
    })*/
  }
  getComments() {
    /*this.commentsServices.getCommentsByIdClient(this.currentUser).subscribe((response:any) => {
      this.userComments = response;
    })*/
  }
  getLanguages() {
    this.languagesServices.getLanguagesByIdClient(this.currentUser).subscribe((response:any) => {
      this.clientLanguages = response;
    })
  }
  getSocial() {
    this.socialService.getSocialNetworksByIdClient(this.currentUser).subscribe((response:any) => {
      this.clientSocial = response;
    })
  }
  editDialogClient(): void {
     this.editProfile.open(EditProfileComponent, {
       width: "500px",
       data: {
         client: this.clientUsers,
         clientId: this.currentUser,
       }
     })

  }
}
