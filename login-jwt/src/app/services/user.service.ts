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

  // Conexão com endpoint para reset/update de senha do usuário. Passa o token e a nova senha para verificações e update pelo back-end.
  update(
    token: string,
    newPasswordWithEmail: { email: string; newPassword: string }
  ): Observable<void> {
    // Define o cabeçalho do tipo json.
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // conexão com a url da api
    const url = `${this.apiUrl}auth/reset-password/${token}`;
    return this.http.post<void>(url, newPasswordWithEmail, { headers });
  }

  sendEmail(email: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(
      this.apiUrl + 'auth/reset-password/forgot?email=' + email.email,
      {
        headers: headers,
      }
    );
  }
}
