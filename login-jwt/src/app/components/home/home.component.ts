import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  isToken: boolean = false;

  ngOnInit(): void {
    this.verificaLogin();
    this.verificaToken();
  }

  verificaToken() {
    const token = JSON.parse(sessionStorage.getItem('token') || '{}');
    if (Object.keys(token).length > 0) {
      this.isToken = true;
    }
  }

  verificaLogin() {
    this.userService.getHome().subscribe({
      error: (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.toastr.error('Token Inválido ou expirado!', 'Erro');
          this.router.navigate(['']);
        }
      },
    });
  }

  logout(): void {
    this.userService.logout();
    this.toastr.info('Logout realizado com sucesso!', 'Info');
  }
}
