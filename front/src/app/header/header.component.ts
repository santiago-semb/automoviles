import { Component, OnInit } from '@angular/core';
import { Marca } from '../model/marca.model';
import { MarcaService } from '../service/marca.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  marcas: Marca[] = [];

  constructor(private marcaService: MarcaService) { }

  ngOnInit(): void {
    this.marcaService.getMarcas().subscribe(data => {
      let todasLasMarcas = [];
      for(let i=0; i<9; i++){
        if(data[i] != undefined)
        todasLasMarcas.push(data[i]);
      }

      for(let i=0; i<todasLasMarcas.length;i++){
        this.marcas.push(data[i]);
      }
    });
  }

}
