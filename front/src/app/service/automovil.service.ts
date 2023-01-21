import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Automovil } from '../model/automovil.model';
import { Observable } from 'rxjs';
import { AUTO_STYLE } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AutomovilService {

  constructor(private httpClient: HttpClient) { }

  url = "https://conse.onrender.com/automovil/";

  public getAutomoviles(): Observable<Automovil> {
    return this.httpClient.get<Automovil>(this.url + "traer");
  }

  public getAutomovil(id: number): Observable<Automovil> { 
    return this.httpClient.get<Automovil>(this.url + "traer/" + id);
  }

  public getAutomovilByPatente(patente: string): Observable<Automovil> {
    return this.httpClient.get<Automovil>(this.url + "get/" + patente);
  }

  public crearAutomovil(automovil: Automovil): Observable<Automovil> {
    return this.httpClient.post<Automovil>(this.url + "crear", automovil);
  }

  public eliminarAutomovil(id: number): Observable<Automovil> {
    return this.httpClient.delete<Automovil>(this.url + "eliminar/" + id);
  }

  public actualizarAutomovil(id:number, automovil:Automovil): Observable<Automovil> {
    return this.httpClient.put<Automovil>(this.url + "actualizar/" + id, automovil);
  }
}
