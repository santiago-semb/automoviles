import { Component, OnInit } from '@angular/core';
import { Venta } from '../model/venta.model';
import { VentaService } from '../service/venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  ventas: Venta[] = [];

  constructor(private ventaService: VentaService) { }

  ngOnInit(): void {
    this.ventaService.getVentas().subscribe(data => {
      let todasLasVentas = [];
      for(let i=0; i<200; i++){
        if(data[i] != undefined)
        todasLasVentas.push(data[i]);
      }
      for(let i=0; i<todasLasVentas.length;i++){
        this.ventas.push(data[i]);
      }
    });
  }

  eliminarVenta(id:number) {
    this.ventaService.eliminarVenta(id).subscribe();
    alert('Se ha eliminado la venta.');
    window.location.reload();
  }

}
