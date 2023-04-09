import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ModelComponent } from './model/model.component';
import { GetempComponent } from './getemp/getemp.component';
import { SignupComponent } from './signup/signup.component';
import { AddempComponent } from './addemp/addemp.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    GetempComponent,
    SignupComponent,
    AddempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
