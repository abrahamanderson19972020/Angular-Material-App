import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'https://angular-material-api.azurewebsites.net/users';
  userData: User[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<User[]>(this.url).subscribe((res) => {
      this.userData = res;
    });
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }
  getUserById(id: number) {
    return this.userData.find((u) => u.id == id);
  }
}
