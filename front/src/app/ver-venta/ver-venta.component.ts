import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MarcaService } from '../service/marca.service';
import { ModeloService } from '../service/modelo.service';
import { PublicacionService } from '../service/publicacion.service';
import { VentaService } from '../service/venta.service';

@Component({
  selector: 'app-ver-venta',
  templateUrl: './ver-venta.component.html',
  styleUrls: ['./ver-venta.component.css']
})
export class VerVentaComponent implements OnInit {

  imgModelo:string;
  imgMarca:string;
  marca:string;
  kilometros:number;
  automovil:string;
  motor:string;
  color:string;
  idVenta:number;
  asunto:string;
  monto:number;
  fecha:Date;
  nombreComprador:string;
  apellidoComprador:string;
  dniComprador:number;
  numeroTelefonoContacto:string;
  emailContacto:string;

  constructor(private activatedRoute: ActivatedRoute, private ventaService: VentaService, private modelService: ModeloService, private marcaService: MarcaService, private publiService: PublicacionService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'].toString();
        this.ventaService.getVenta(id).subscribe(data => {
          this.idVenta = data.id;
          this.asunto = data.asunto;
          this.monto = data.monto;
          this.fecha = data.fecha;
          this.nombreComprador = data.nombreComprador;
          this.apellidoComprador = data.apellidoComprador;
          this.dniComprador = data.dniComprador;
          this.publiService.getPublicacionByAutomovil(this.asunto).subscribe(data => {
            this.motor = data.motor;
            this.kilometros = data.kilometros;
            this.color = data.color;
          });
        });
    });
  }

  getModeloByName(nombreModelo:string){
    this.modelService.getModeloByName(nombreModelo).subscribe(data => {
      this.imgModelo = data.img;
      this.marca = data.marca;
      this.marcaService.getMarcaByName(this.marca).subscribe(data => {
        this.imgMarca = data.img;
      });
    });
  }

}
