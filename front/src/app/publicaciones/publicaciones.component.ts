import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelo } from '../model/modelo.model';
import { Publicacion } from '../model/publicacion.model';
import { Venta } from '../model/venta.model';
import { ModeloService } from '../service/modelo.service';
import { PublicacionService } from '../service/publicacion.service';
import { VentaService } from '../service/venta.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  page!:number;

  publicaciones: Publicacion[] = [];
  modelos:Modelo[] = [];  

  botonInfo = true;
  botonTecnico = false;
  botonContacto = false;

  autenticado = false;
  userAuth = false;

  userName:string;
  userSurname:string;
  documentoNacionalIdentidad:number;

  constructor(private router:Router, private publiService: PublicacionService, private modeloService: ModeloService, private ventaService: VentaService) { }

  ngOnInit(): void {
    this.publiService.getPublicaciones().subscribe(data => {
      let todosLasPublicaciones = [];
      for(let i=0; i<200; i++){
        if(data[i] != undefined)
        todosLasPublicaciones.push(data[i]);
      }
      for(let i=0; i<todosLasPublicaciones.length;i++){
        this.publicaciones.push(data[i]);
      }
    });

    this.modeloService.getModelos().subscribe(data => {
      let todosLosModelos = [];
      for(let i=0; i<500; i++){
        if(data[i] != undefined)
        todosLosModelos.push(data[i]);
      }
      for(let i=0; i<todosLosModelos.length;i++){
        this.modelos.push(data[i]);     
      }
    });

    if(localStorage.getItem("data")){
      this.autenticado = true;
      let data = localStorage.getItem("data");
      let dataParse = JSON.parse(data);
      this.nombreComprador = dataParse.nombre;
      this.apellidoComprador = dataParse.apellido;
      this.dniComprador = dataParse.dni;
    }

  }

  redireccionCrearPublicacion() {
    this.router.navigate(['crear-publicacion'])
  }

  eliminarPublicacion(id:number) {
    this.publiService.eliminarPublicacion(id).subscribe();
    alert("Se ha eliminado la publicacion");
    window.location.reload();
  }

  info(){
    this.botonInfo = true;
    this.botonTecnico = false;
    this.botonContacto = false
  }
  tecnico(){
    this.botonTecnico = true;
    this.botonInfo = false;
    this.botonContacto = false;
  }
  contacto(){
    this.botonContacto = true;
    this.botonTecnico = false;
    this.botonInfo = false;
  }
  asunto:string;
  monto:number;
  nombreComprador:string = "default";
  apellidoComprador:string = "default";
  dniComprador:number = 0;
  numeroTelefonoContacto:string;
  emailContacto:string;
  crearVenta(asunto:string,monto:any,nombreComprador:string,apellidoComprador:string,dniComprador:number,numeroTelefonoContacto:string,emailContacto:string){
    confirm('¿Seguro que quieres comprar este auto?');
    let venta = new Venta(asunto,monto,nombreComprador,apellidoComprador,dniComprador,numeroTelefonoContacto,emailContacto);
    this.ventaService.crearVenta(venta).subscribe();
  }

  enviarForm(nombre:string,apellido:string,dni:any){

    this.nombreComprador = nombre;
    this.apellidoComprador = apellido;
    this.dniComprador = dni;
    if(this.nombreComprador.length > 2 && this.apellidoComprador.length > 2 && this.dniComprador > 25000000){
    let data = {
      "nombre":this.nombreComprador,
      "apellido":this.apellidoComprador,
      "dni":this.dniComprador
    };
    let dataJSON = JSON.stringify(data);
    localStorage.setItem("data", dataJSON);
    sessionStorage.setItem("data", dataJSON);
    this.autenticado = true;
    }else{
      console.log("ERROR EN EL JSON");
      this.autenticado = false;
    }
  
  }

  recuperarInfoUsuario(){
    let data = localStorage.getItem("data");
    let dataParse = JSON.parse(data);
    this.userName = dataParse.nombre;
    this.userSurname = dataParse.apellido;
    this.documentoNacionalIdentidad = dataParse.dni;
    this.userAuth = true;
  }

  vaciarAlmacenamientoLocal(){
    localStorage.clear();
    window.location.reload();
  }

}
