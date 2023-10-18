import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendEmailFormComponent } from './components/send-email-form/send-email-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: SendEmailFormComponent },
  { path: 'home', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
