import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Automovil } from '../model/automovil.model';
import { Modelo } from '../model/modelo.model';
import { AutomovilService } from '../service/automovil.service';
import { ModeloService } from '../service/modelo.service';

@Component({
  selector: 'app-actualizar-automoviles',
  templateUrl: './actualizar-automoviles.component.html',
  styleUrls: ['./actualizar-automoviles.component.css']
})
export class ActualizarAutomovilesComponent implements OnInit{

  patenteAutoAct:string = "";
  marcaAutoAct:string = "";
  modeloAutoAct:string = "";
  precioAutoAct:number = 0;
  colorAutoAct:string = "";
  modelos: Modelo[] = [];

  constructor(private autoService: AutomovilService, private activatedRoute: ActivatedRoute, private modelService: ModeloService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'].toString();
      this.autoService.getAutomovil(id).subscribe(data => {
        this.patenteAutoAct = data.patente;
        this.marcaAutoAct = data.marca;
        this.modeloAutoAct = data.modelo;
        this.precioAutoAct = data.precio;
        this.colorAutoAct = data.color;
        this.modelService.getModelosByMarca(this.marcaAutoAct).subscribe(data => {
          let todosLasPublicaciones = [];
          for(let i=0; i<200; i++){
            if(data[i] != undefined)
            todosLasPublicaciones.push(data[i]);
          }
          for(let i=0; i<todosLasPublicaciones.length;i++){
            this.modelos.push(data[i]);
          }
        });
      });
    });
  }

  actualizar(patente:string,marca:string,modelo:string,precio:any,color:string){
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'].toString();
      let auto = new Automovil(modelo,marca,precio,color,patente);
      this.autoService.actualizarAutomovil(id, auto).subscribe();
    })
  }
}
