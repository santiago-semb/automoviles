package com.example.practica1.Interface;

import com.example.practica1.Entity.Publicacion;
import java.util.List;

public interface IPublicacionService {
    
    public List<Publicacion> getPublicaciones();
    public Publicacion getPublicacionByAutomovil(String automovil);
    public Publicacion getPublicacion(Long id);
    public void crearPublicacion(Publicacion publicacion);
    public void eliminarPublicacion(Long id);
    
}
