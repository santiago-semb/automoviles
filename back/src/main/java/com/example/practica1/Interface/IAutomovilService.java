package com.example.practica1.Interface;

import com.example.practica1.Entity.Automovil;
import java.util.List;

public interface IAutomovilService {
      
    public List<Automovil> getAutomovil();
    
    public void insertarAutomovil(Automovil automovil);
    
    public void eliminarAutomovil(Long id);
    
    public Automovil getAutomovil(Long id);
    
    public Automovil getAutomovil(String patente);
    
}
