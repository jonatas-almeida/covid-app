import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-covid-country-data',
  templateUrl: './covid-country-data.component.html',
  styleUrls: ['./covid-country-data.component.css']
})
export class CovidCountryDataComponent implements OnInit {

  covidCountryData: any = [];
  countryData: any = [];
  buscarPaises: string;
  lastCountry: string;

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.getCountriesData();
    this.refreshPage();
  }


  //Pega todos os países
  getCountriesData(){
    this.dataService.getAllPaisesData().subscribe(
      (response) => {
        this.covidCountryData = response
        console.log(response)
      }
    )
  }

  //Pega um país específico
  getCountryData(){
    this.dataService.getPaisData(this.buscarPaises).subscribe(
      (response) => {
        this.countryData = response.data;
        this.salvarPais();
      }
    )
  }

  //Manter os dados quando carregar a página
  refreshPage(){
    this.buscarPaises = localStorage.getItem('país');
    this.getCountryData();
  }

  //Salvar estado digitado no localStorage
  salvarPais(){
    localStorage.setItem('país', this.buscarPaises);
    this.lastCountry = localStorage.getItem('país');
  }


}
