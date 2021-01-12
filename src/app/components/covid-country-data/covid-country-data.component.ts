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

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.getCountriesData();
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
        this.countryData = response;
      }
    )
  }


}
