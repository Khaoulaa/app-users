import { BrowserModule } from '@angular/platform-browser';
import { NgModule  ,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserService} from './services/user.service'
import { HttpClientModule  } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot()

  ],
  providers: [UserService],
  bootstrap: [AppComponent],
 schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
