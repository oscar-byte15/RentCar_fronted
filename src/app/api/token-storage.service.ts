import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const CLIENT_ID = 'clientId'

@Injectable({ providedIn: 'root' })
  export class TokenStorageService {
    constructor() { }
    signOut(): void {
      window.sessionStorage.clear();
    }
    public saveToken(token: string): void {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    public getToken(): string {
      return <string>sessionStorage.getItem(TOKEN_KEY);
    }
    public saveUser(user: any): void {
      window.sessionStorage.removeItem(USER_KEY);
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
      window.localStorage.setItem(CLIENT_ID, JSON.stringify(user.id));
    }
    public getUser = () => JSON.parse(<string>sessionStorage.getItem(USER_KEY));
  }
