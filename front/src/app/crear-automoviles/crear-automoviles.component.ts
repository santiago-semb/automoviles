import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Automovil } from '../model/automovil.model';
import { Marca } from '../model/marca.model';
import { Modelo } from '../model/modelo.model';
import { AutomovilService } from '../service/automovil.service';
import { MarcaService } from '../service/marca.service';
import { ModeloService } from '../service/modelo.service';

@Component({
  selector: 'app-crear-automoviles',
  templateUrl: './crear-automoviles.component.html',
  styleUrls: ['./crear-automoviles.component.css']
})
export class CrearAutomovilesComponent implements OnInit {

  patenteAuto:string = "";
  marcaAuto:string = "";
  modeloAuto:string = "";
  precioAuto:number = 0;
  colorAuto:string = "";

  marcas: Marca[] = [];
  modelos: Modelo[] = [];
 
  constructor(private autoService: AutomovilService, private router: Router, private marcaService:MarcaService, private modeloService: ModeloService) { }

  ngOnInit(): void {
    this.marcaService.getMarcas().subscribe(data => {
      let todasLasMarcas = [];
      for(let i=0; i<200; i++){
        if(data[i] != undefined)
        todasLasMarcas.push(data[i]);
      }
      for(let i=0; i<todasLasMarcas.length;i++){
        this.marcas.push(data[i]);
      }

    /*this.modeloService.getModelos().subscribe(data => {
      let todosLosModelos = [];
      for(let i=0; i<200; i++){
        if(data[i] != undefined)
        todosLosModelos.push(data[i]);
      }
      for(let i=0; i<todosLosModelos.length;i++){
        this.modelos.push(data[i]);
      }*/
    });

    
  }

  onSubmit(){
    let automovil = new Automovil(this.modeloAuto,this.marcaAuto,this.precioAuto,this.colorAuto,this.patenteAuto);
    this.autoService.crearAutomovil(automovil).subscribe();
    alert("Se ha creado el automovil.");
    this.router.navigate(['automoviles']);
  }


  getModelos(marca:string){
    this.modeloService.getModelosByMarca(marca).subscribe(data => {
      let todosLasPublicaciones = [];
      for(let i=0; i<200; i++){
        if(data[i] != undefined)
        todosLasPublicaciones.push(data[i]);
      }
      for(let i=0; i<todosLasPublicaciones.length;i++){
        this.modelos.push(data[i]);
      }
    });
  }

  limpiarArrayModelos(){
    for(let i=0; i<200; i++){
      this.modelos.pop();
    }
  }


}
