export class usu {
    id: number
    nombreUsuario: String
    nombreApellido: String;
    email: String;
    amigos: Array<usu> = new Array<usu>();
    tipoDeUsuario: String;

    constructor(_id: number,
        _nombreUsuario: String,
        _nombreApellido: String,
        _email: String,
        _amigos: Array<usu>,
        _tipoDeUsuario?: String,

    ) {
    this.id = _id
        this.nombreUsuario = _nombreUsuario
        this.nombreApellido = _nombreApellido
        this.email = _email
        this.amigos = _amigos
        this.tipoDeUsuario = _tipoDeUsuario
    }


    static fromJson(usuJson) {
        console.log("usuJson")
        let usuario1 = new usu(usuJson.id, usuJson.nombreUsuario, usuJson.nombreApellido, usuJson.email, usuJson.amigos)
        console.log(usuario1)
        console.log("en usu from json"+ usuario1)
        return usuario1
      
    }

}