import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Url da api
  apiUrl: string = environment.apiUrl;

  // Cadastro de usuário
  insert(objeto: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + 'signup', objeto);
  }
}
