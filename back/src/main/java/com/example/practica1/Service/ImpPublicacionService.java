package com.example.practica1.Service;

import com.example.practica1.Entity.Publicacion;
import com.example.practica1.Interface.IPublicacionService;
import com.example.practica1.Repository.IPublicacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPublicacionService implements IPublicacionService{
    
    @Autowired
    IPublicacionRepository repository;

    @Override
    public List<Publicacion> getPublicaciones() {
        List<Publicacion> publicaciones = repository.findAll();
        return publicaciones;
    }

    @Override
    public Publicacion getPublicacion(Long id) {
        Publicacion publicacion = repository.findById(id).orElse(null);
        return publicacion;
    }
    
    @Override
    public Publicacion getPublicacionByAutomovil(String automovil){
        List<Publicacion> publicacion = repository.findAll();
        for(int i=0; i<publicacion.size(); i++){
            if(publicacion.get(i).getAutomovil().equals(automovil)){
                return publicacion.get(i);
            }
        }
        return null;
    }

    @Override
    public void crearPublicacion(Publicacion publicacion) {
        repository.save(publicacion);
    }

    @Override
    public void eliminarPublicacion(Long id) {
        repository.deleteById(id);
    }
    
}
