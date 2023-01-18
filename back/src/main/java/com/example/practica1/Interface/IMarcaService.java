package com.example.practica1.Interface;

import com.example.practica1.Entity.Marca;
import java.util.List;

public interface IMarcaService {
    
    public List<Marca> getMarcas();
    public Marca getMarca(Long id);
    public Marca getMarca(String nombreMarca);
    public void crearMarca(Marca marca);
    public void eliminarMarca(Long id);
    
}
