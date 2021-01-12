import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CovidDataComponent } from './components/covid-data/covid-data.component';
import { DataService } from './services/data.service';
import { CovidCountryDataComponent } from './components/covid-country-data/covid-country-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CovidDataComponent,
    CovidCountryDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
