import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-covid-data',
  templateUrl: './covid-data.component.html',
  styleUrls: ['./covid-data.component.css']
})
export class CovidDataComponent implements OnInit {

  covidData: any = [];
  buscaData: any = [];
  buscaEstado: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCovidData();
  }


  //Pega todos os dados
  getCovidData(){
    this.dataService.getAllData().subscribe(
      response => {
        this.covidData = response;
      }
    )
  }

  //Método pra buscar dos estados
  buscarEstadoData(){
    this.dataService.getEstadoData(this.buscaEstado).subscribe(
      response => {
        this.buscaData = response;
        this.getCovidData();
      }
    )
  }

}
