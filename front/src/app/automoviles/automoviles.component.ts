import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Automovil } from '../model/automovil.model';
import { Marca } from '../model/marca.model';
import { AutomovilService } from '../service/automovil.service';
import { MarcaService } from '../service/marca.service';

@Component({
  selector: 'app-automoviles',
  templateUrl: './automoviles.component.html',
  styleUrls: ['./automoviles.component.css']
})
export class AutomovilesComponent implements OnInit {
  
  automoviles: Automovil[] = [];
  marcas: Marca[] = [];

  page!:number;

  constructor(private autoService: AutomovilService, private router:Router, private marcaService: MarcaService) { }

  ngOnInit(): void {
    this.autoService.getAutomoviles().subscribe(data => {
      let todosLosAutos = [];
      for(let i=0; i<200; i++){
        if(data[i] != undefined)
        todosLosAutos.push(data[i]);
      }
      for(let i=0; i<todosLosAutos.length;i++){
        this.automoviles.push(data[i]);
      }
    });
    
    this.marcaService.getMarcas().subscribe(data => {
      let todasLasMarcas = [];
      for(let i=0; i<200; i++){
        if(data[i] != undefined)
        todasLasMarcas.push(data[i]);
      }
      for(let i=0; i<todasLasMarcas.length;i++){
        this.marcas.push(data[i]);
      }
    });
  }


  eliminarAuto(id:number){
    this.autoService.eliminarAutomovil(id).subscribe();
    alert("Se ha eliminado el automovil.");
    window.location.reload();
  }

  redireccionCrearAuto(){
    this.router.navigate(['crear-automovil']);
  }

  patente:string = "";

  buscador(patente:string){
    this.autoService.getAutomovilByPatente(patente).subscribe(data => {
      this.router.navigate(['buscar-patente/' + patente])
    });
  }
  
}
