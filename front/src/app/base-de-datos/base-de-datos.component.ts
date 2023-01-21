import { Component, OnInit } from '@angular/core';
import { Marca } from '../model/marca.model';
import { Modelo } from '../model/modelo.model';
import { MarcaService } from '../service/marca.service';
import { ModeloService } from '../service/modelo.service';

@Component({
  selector: 'app-base-de-datos',
  templateUrl: './base-de-datos.component.html',
  styleUrls: ['./base-de-datos.component.css']
})
export class BaseDeDatosComponent implements OnInit {

  modelos: Modelo[] = [];
  marcas: Marca[] = [];

  constructor(private modeloService: ModeloService, private marcaService: MarcaService) { }

  ngOnInit(): void {
    this.modeloService.getModelos().subscribe(data => {
      let todosLosModelos = [];
      for(let i=0; i<200; i++){
        if(data[i] != undefined)
        todosLosModelos.push(data[i]);
      }
      for(let i=0; i<todosLosModelos.length;i++){
        this.modelos.push(data[i]);
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
    })
  }

  eliminarMarca(id:number){
    confirm("¿Seguro que quieres eliminar esta marca?")
    this.marcaService.eliminarMarca(id).subscribe();
    window.location.reload();
  }

  eliminarModelo(id:number){
    confirm("¿Seguro que quieres eliminar este modelo?")
    this.modeloService.eliminarModelo(id).subscribe();
    window.location.reload();
  }

}
