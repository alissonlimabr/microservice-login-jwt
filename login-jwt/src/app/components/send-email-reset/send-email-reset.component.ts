import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-send-email-reset',
  templateUrl: './send-email-reset.component.html',
  styleUrls: ['./send-email-reset.component.scss'],
})
export class SendEmailResetComponent {
  formSignUp: FormGroup;
  formSendEmail: FormGroup;
  selectedIndex: number = 0;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.formSignUp = this.fb.group({
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

    this.formSendEmail = this.fb.group({
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
    });
  }

  signInForm() {
    if (this.formSignUp.invalid) return;

    this.userService.insert(this.formSignUp.value).subscribe({
      complete: () => {
        this.formSignUp.disable(); // desabilita o form após o submmit com sucesso.
        this.formSignUp.setErrors({ inserted: true }); //Invalida o form após o submmit com sucesso
        this.selectedIndex = 1; // Muda para a segunda tab
      },
    });
  }

  sendEmailForm() {
    if (this.formSendEmail.invalid) return;

    this.userService.sendEmail(this.formSendEmail.value).subscribe({
      complete: () => {
        this.formSendEmail.disable();
        this.formSendEmail.setErrors({ inserted: true });
        this.toastr.success(
          'Enviamos um link de redefinição para o seu e-mail!',
          'Sucesso'
        );
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.toastr.warning(
            'Acabamos de enviar um link de redefinição para o seu e-mail. Verifique sua caixa de spam ou tente novamente dentro de alguns minutos.',
            'Aviso'
          );
        }
      },
    });
  }
}
