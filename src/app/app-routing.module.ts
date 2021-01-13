import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidCareComponent } from './components/covid-care/covid-care.component';
import { CovidCountryDataComponent } from './components/covid-country-data/covid-country-data.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'paises',
    component: CovidCountryDataComponent
  },
  {
    path: 'cuidados',
    component: CovidCareComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
