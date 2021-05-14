import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from '../people-list/people-list.component';
import { RegisterComponent } from '../register/register.component';
import { ModalComponent } from '../modal/modal.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, PeopleListComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
