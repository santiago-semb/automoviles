export class Publicacion {

    id?:number;
    automovil:string;
    precio:number;
    descripcion:string;
    color:string;
    motor:string;
    kilometros:number;
    modelo:string;
    telefono:string;
    email:string
    masInfoDeContacto:string;

    constructor(automovil:string,precio:number,descripcion:string,color:string,motor:string,kilometros:number,modelo:string,telefono:string,email:string,masInfoDeContacto:string) {
        this.automovil = automovil;
        this.precio = precio;
        this.descripcion = descripcion;
        this.color = color;
        this.motor = motor;
        this.kilometros = kilometros;
        this.modelo = modelo;
        this.telefono = telefono;
        this.email = email;
        this.masInfoDeContacto = masInfoDeContacto;
    }

    getMasInfoDeContacto(){
        return this.masInfoDeContacto;
    }
    setMasInfoDeContacto(infoDeContacto:string){
        this.masInfoDeContacto = infoDeContacto;
    }

}