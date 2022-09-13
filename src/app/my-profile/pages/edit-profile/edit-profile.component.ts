import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Client} from "../../model/client";
import {ClientService} from "../../services/client.service";

export interface DialogProfileData {
  client: Client;
  clientId: string;
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  url="./assets/users-images/";
  constructor(public dialogRef: MatDialogRef<EditProfileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogProfileData,
              private clientService: ClientService) { }

  ngOnInit(): void {
  }

  cancel(){
    this.dialogRef.close();
  }

  confirm() {
      this.clientService.update(this.data.client.id, this.data.client).subscribe((response: any) => {
        console.log(response);
      });
  }

  onselectFile(image: any) {
    if (image.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(image.target.files[0]);
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
    }
  }
}
