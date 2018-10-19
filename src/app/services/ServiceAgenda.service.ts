import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAgendaService {

  get agendaHoy(): Array<any> {
    return [{
      fecha: new Date(),
      hora: new Date().getHours().toString(),
      minutos: new Date().getMinutes().toString(),
      nombre: "No   Cumple  de Kara",
      lugar: "Mi Casa",
      motivo: "Kara Danvers"
    }
    ]
  }
  get agendaSemana(): Array<any> {
    return [

      {
        timestamp: "14/10/2018 22:00",
        nombre: "Hosen Fest",
        lugar: "Club Ciudad",
        motivo: "Die Toten Hosen"
      },

      {
        timestamp: "16/10/2018 22:00",
        nombre: "Aniversario P.E.",
        lugar: "25 de Mayo 1485",
        motivo: "Timothy Drake"
      }

    ]
  }
  get agendaProximos(): Array<any> {
    return [

      {
        timestamp: "20/12/2018 21:30",
        nombre: "Partido",
        lugar: "Parque Sarmiento",
        motivo: "James Gordon"
      },

      {
        timestamp: "20/12/2018 21:30",
        nombre: "Despedida Julia",
        lugar: "Av. Cabildo 456",
        motivo: "Kara Danvers"
      }

    ]
  }
  constructor() { }
}
