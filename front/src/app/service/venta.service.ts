import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../model/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private httpClient: HttpClient) { }

  url = "https://consesionaria.onrender.com/venta/";

  public getVentas(): Observable<Venta> {
    return this.httpClient.get<Venta>(this.url + "traer");
  }

  public getVenta(id:number): Observable<Venta> {
    return this.httpClient.get<Venta>(this.url + "traer/" + id);
  }

  public crearVenta(venta:Venta): Observable<Venta> {
    return this.httpClient.post<Venta>(this.url + "crear", venta);
  }

  public eliminarVenta(id:number): Observable<Venta> {
    return this.httpClient.delete<Venta>(this.url + "eliminar/" + id);
  }
}
