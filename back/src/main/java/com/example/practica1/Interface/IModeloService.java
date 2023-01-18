package com.example.practica1.Interface;

import com.example.practica1.Entity.Modelo;
import java.util.List;

public interface IModeloService {
    
    public List<Modelo> getModelos();
    public Modelo getModelo(Long id);
    public Modelo getModelo(String nombreModelo);
    public List<Modelo> getModelosByMarca(String nombreMarca);
    public Modelo getModeloByMarca(String nombreMarca);
    public void crearModelo(Modelo modelo);
    public void eliminarModelo(Long id);
    
}
