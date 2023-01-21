import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from '../model/marca.model';
import { Modelo } from '../model/modelo.model';
import { MarcaService } from '../service/marca.service';
import { ModeloService } from '../service/modelo.service';

@Component({
  selector: 'app-crear-modelo',
  templateUrl: './crear-modelo.component.html',
  styleUrls: ['./crear-modelo.component.css']
})
export class CrearModeloComponent implements OnInit {

  marcas: Marca[] = [];

  constructor(private marcaService: MarcaService, private modeloService: ModeloService, private router: Router) { }

  ngOnInit(): void {
    this.marcaService.getMarcas().subscribe(data => {
      let todosLasMarcas = [];
      for(let i=0; i<500; i++){
        if(data[i] != undefined)
        todosLasMarcas.push(data[i]);
      }
      for(let i=0; i<todosLasMarcas.length;i++){
        this.marcas.push(data[i]);
      }
    });
  }

  crearModelo(nombre:string,marca:string,img:string){
    let modelo = new Modelo(nombre,marca,img);
    this.modeloService.crearModelo(modelo).subscribe();
    this.router.navigate(['base-de-datos']);
  }

}
