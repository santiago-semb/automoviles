export class Automovil {

    id?:number;
    modelo:string;
    marca:string;
    precio:number;
    color:string;
    patente:string;

    public constructor(modelo:string,marca:string,precio:number,color:string,patente:string){
        this.modelo = modelo;
        this.marca = marca;     
        this.precio = precio;
        this.color = color;
        this.patente = patente;
    }

}