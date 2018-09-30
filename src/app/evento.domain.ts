export class Evento {
	
	timestamp: string
	titulo: string
	lugar: string
	organizador: string

	constructor(timestamp: string, titulo: string, lugar: string, organizador: string) {
	}
}

let e1: Evento = new Evento("10/10/2018 22:00","Cumple Kara","Mi Casa","Kara Danvers")
let e2: Evento = new Evento("14/10/2018 22:00","Hosen Fest","Club Ciudad","Die Toten Hosen")
let e3: Evento = new Evento("16/10/2018 22:00","Aniversario P.E.","25 de Mayo 1485","Timothy Drake")
let e4: Evento = new Evento("20/12/2018 21:30","Partido","Parque Sarmiento","James Gordon")
let e5: Evento = new Evento("20/12/2018 21:30","Despedida Julia","Av. Cabildo 456","Kara Danvers")

let dia: Evento[] = [e1]

let semana: Evento[] = [e2,e3]

let proximos: Evento[] = [e4,e5]