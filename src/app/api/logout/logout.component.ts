import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../token-storage.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  title = 'frontend-security';
  private roles: string[] | undefined;
  isLoggedIn = false;
  username: string | undefined;
  constructor(private tokenStorageService: TokenStorageService) {}
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
