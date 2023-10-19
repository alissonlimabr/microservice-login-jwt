import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { SendEmailResetComponent } from './components/send-email-reset/send-email-reset.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgot', component: SendEmailResetComponent },
  {
    path: 'reset/:email/:token',
    component: ResetPasswordFormComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
