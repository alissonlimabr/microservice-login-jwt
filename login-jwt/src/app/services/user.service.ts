import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public autenticado = false;

  constructor(private http: HttpClient, private router: Router) {}
  // Url da api
  apiUrl: string = environment.apiUrl;
  // Cadastro de usuário
  insert(objeto: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + 'auth/signup', objeto);
  }
  // Cadastro de usuário
  login(objeto: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + 'auth/signin', objeto).pipe(
      tap((token) => {
        if (token) {
          sessionStorage.setItem('token', JSON.stringify(token));
          this.router.navigate(['/home']);
        }
      })
    );
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['']);
  }

  getHome() {
    const token = JSON.parse(sessionStorage.getItem('token') || '{}');
    let reqHeader = new HttpHeaders({
      Authorization: 'Bearer ' + token.token,
    });
    return this.http.get(this.apiUrl + 'resource', {
      headers: reqHeader,
    });
  }
}
