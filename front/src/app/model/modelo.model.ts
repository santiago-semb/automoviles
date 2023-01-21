export class Modelo {

    id?:number;
    nombre:string;
    marca:string;
    img:string;

    constructor(nombre:string,marca:string,img:string){
        this.nombre = nombre;
        this.marca = marca;
        this.img = img;
    }

}