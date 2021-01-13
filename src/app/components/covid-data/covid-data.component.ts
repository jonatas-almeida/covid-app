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
  lastState: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCovidData();
    this.refreshPage();
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
        this.salvarEstado();
      }
    )
  }

  //Pega os dados salvos no localStorage e exibe as informações
  refreshPage(){
    this.buscaEstado = localStorage.getItem('estado');
    this.buscarEstadoData();
  }

  //Salva o estado que foi digitado no localStorage
  salvarEstado(){
    localStorage.setItem('estado', this.buscaEstado);
    this.lastState = localStorage.getItem('estado');
  }

}
