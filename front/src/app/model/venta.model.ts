export class Venta {
    id?:number;
    asunto:string;
    monto:number;
    fecha:Date;
    nombreComprador:string;
    apellidoComprador:string;
    dniComprador:number;
    numeroTelefonoContacto:string;
    emailContacto:string;

    constructor(asunto:string,monto:number,nombreComprador:string,apellidoComprador:string,dniComprador:number,numeroTelefonoContacto:string,emailContacto:string) {
        this.asunto = asunto;
        this.monto = monto;
        this.nombreComprador = nombreComprador;
        this.apellidoComprador = apellidoComprador;
        this.dniComprador = dniComprador;
        this.numeroTelefonoContacto = numeroTelefonoContacto;
        this.emailContacto = emailContacto;
    }
}