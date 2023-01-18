package com.example.practica1.Service;

import com.example.practica1.Entity.Modelo;
import com.example.practica1.Interface.IModeloService;
import com.example.practica1.Repository.IModeloRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpModeloService implements IModeloService {
    
    @Autowired
    IModeloRepository repository;

    @Override
    public List<Modelo> getModelos() {
        List<Modelo> modelos = repository.findAll();
        return modelos;
    }

    @Override
    public Modelo getModelo(Long id) {
        Modelo modelo = repository.findById(id).orElse(null);
        return modelo;
    }

    @Override
    public Modelo getModelo(String nombreModelo) {
        List<Modelo> modelo = repository.findAll();
        for(int i=0; i<modelo.size(); i++){
            if(modelo.get(i).getNombre().equals(nombreModelo)){
                return modelo.get(i);
            }
        }
        return null;
    }
    
    @Override
    public Modelo getModeloByMarca(String nombreMarca){
        List<Modelo> modelo = repository.findAll();
        for(int i=0; i<modelo.size(); i++){
            if(modelo.get(i).getMarca().equals(nombreMarca)){
                return modelo.get(i);
            }
        }
        return null;
    }
    
    @Override
    public List<Modelo> getModelosByMarca(String nombreMarca){
        List<Modelo> modelo = repository.findAll();
        List<Modelo> modelos = new ArrayList<Modelo>();
        for(int i=0; i<modelo.size(); i++){
            if(modelo.get(i).getMarca().equals(nombreMarca)){
                modelos.add(modelo.get(i));
            }
        }
        return modelos;
    }

    @Override
    public void crearModelo(Modelo modelo) {
        repository.save(modelo);
    }

    @Override
    public void eliminarModelo(Long id) {
        repository.deleteById(id);
    }
    
}
