import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Automovil } from '../model/automovil.model';
import { AutomovilService } from '../service/automovil.service';
import { MarcaService } from '../service/marca.service';

@Component({
  selector: 'app-busqueda-patente',
  templateUrl: './busqueda-patente.component.html',
  styleUrls: ['./busqueda-patente.component.css']
})
export class BusquedaPatenteComponent implements OnInit {

  auto: Automovil = new Automovil("","",0,"","");
  imgMarcaFiat: string;
  imgMarcaRenault: string;
  imgMarcaFord: string;
  imgMarcaRam: string; 
  imgMarcaNissan: string; 
  imgMarcaPeugeot: string; 
  imgMarcaVolkswagen: string;
  imgMarcaChevrolet: string;  
  imgMarcaToyota: string;

  constructor(private autoService: AutomovilService, private activatedRoute: ActivatedRoute, private marcaService: MarcaService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const patente = params['patente'].toString();
      this.autoService.getAutomovilByPatente(patente).subscribe(data => {
        this.auto = data;
      });
      this.marcaService.getMarcaByName("ford").subscribe(data => {
        this.imgMarcaFord = data.img
      });
      this.marcaService.getMarcaByName("renault").subscribe(data => {
        this.imgMarcaRenault = data.img
      });
      this.marcaService.getMarcaByName("fiat").subscribe(data => {
        this.imgMarcaFiat = data.img
      });
      this.marcaService.getMarcaByName("ram").subscribe(data => {
        this.imgMarcaRam = data.img
      });
      this.marcaService.getMarcaByName("nissan").subscribe(data => {
        this.imgMarcaNissan = data.img
      });
      this.marcaService.getMarcaByName("volkswagen").subscribe(data => {
        this.imgMarcaVolkswagen = data.img
      });
      this.marcaService.getMarcaByName("peugeot").subscribe(data => {
        this.imgMarcaPeugeot = data.img
      });
      this.marcaService.getMarcaByName("chevrolet").subscribe(data => {
        this.imgMarcaChevrolet = data.img
      });
      this.marcaService.getMarcaByName("toyota").subscribe(data => {
        this.imgMarcaToyota = data.img
      });
    });
  }

  eliminarAuto(id:number){
    this.autoService.eliminarAutomovil(id).subscribe();
    alert("Se ha eliminado el automovil.");
    this.router.navigate(['automoviles']);
  }

}
