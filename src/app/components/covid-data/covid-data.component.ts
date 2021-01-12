import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-covid-data',
  templateUrl: './covid-data.component.html',
  styleUrls: ['./covid-data.component.css']
})
export class CovidDataComponent implements OnInit {

  covidData: any = [];
  buscaEstado: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCovidData();
  }

  getCovidData(){
    this.dataService.getAllData().subscribe(
      response => {
        this.covidData = response;
      }
    )
  }

  buscarEstadoData(){
    this.dataService.getEstadoData(this.buscaEstado).subscribe(
      response => {
        this.covidData = response;
        console.log(response);
      }
    )
  }

}
