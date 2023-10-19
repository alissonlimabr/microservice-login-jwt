import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  formSignUp: FormGroup;
  formSignIn: FormGroup;
  selectedIndex: number = 1;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.formSignUp = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });

    this.formSignIn = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  signupForm() {
    if (this.formSignUp.invalid) return;

    this.userService.insert(this.formSignUp.value).subscribe({
      complete: () => {
        this.formSignUp.disable(); // desabilita o form após o submmit com sucesso.
        this.formSignUp.setErrors({ inserted: true }); //Invalida o form após o submmit com sucesso
        this.selectedIndex = 2; // Muda para a segunda tab
        this.toastr.success('E-mail cadastrado com sucesso!', 'Sucesso');
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.toastr.error('E-mail já cadastrado!', 'Erro');
        }
      },
    });
  }

  signinForm() {
    if (this.formSignIn.invalid) return;

    this.userService.login(this.formSignIn.value).subscribe({
      complete: () => {
        this.formSignIn.disable(); // desabilita o form após o submmit com sucesso.
        this.formSignIn.setErrors({ inserted: true }); //Invalida o form após o submmit com sucesso
        this.toastr.success('Login efetuado com sucesso!', 'Sucesso');
        this.router.navigate(['/home']);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.toastr.error('E-mail ou senha inválidos!', 'Erro');
        }
      },
    });
  }
}
