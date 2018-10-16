import { Component, OnInit } from '@angular/core';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent implements OnInit {

  dia = [

    {fecha: new Date(),
      hora: new Date().getHours().toString(),
      minutos: new Date().getMinutes().toString(),

    nombre: "Cumple Kara",
    lugar: "Mi Casa",
    motivo:"Kara Danvers"}
    
  ]

  semana = [

    {timestamp: "14/10/2018 22:00",
    nombre: "Hosen Fest",
    lugar: "Club Ciudad",
    motivo: "Die Toten Hosen"},
    
    {timestamp: "16/10/2018 22:00",
    nombre: "Aniversario P.E.",
    lugar: "25 de Mayo 1485",
    motivo: "Timothy Drake"}
    
  ]

proximos = [

    {timestamp: "20/12/2018 21:30",
    nombre: "Partido",
    lugar: "Parque Sarmiento",
    motivo: "James Gordon"},
    
    {timestamp: "20/12/2018 21:30",
    nombre: "Despedida Julia",
    lugar: "Av. Cabildo 456",
    motivo: "Kara Danvers"}
    
    ]

  constructor() {  
}

  ngOnInit() { 
  }
}


