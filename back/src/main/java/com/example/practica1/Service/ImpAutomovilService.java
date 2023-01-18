package com.example.practica1.Service;

import com.example.practica1.Entity.Automovil;
import com.example.practica1.Interface.IAutomovilService;
import com.example.practica1.Repository.IAutomovilRepository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpAutomovilService implements IAutomovilService {
    
    @Autowired
    IAutomovilRepository repository;
    
    @Override
    public List<Automovil> getAutomovil(){
        return repository.findAll();
    }
    
    @Override
    public void insertarAutomovil(Automovil automovil){
        repository.save(automovil);
    }
    
    @Override
    public void eliminarAutomovil(Long id){
        repository.deleteById(id);
    }
    
    @Override
    public Automovil getAutomovil(Long id){
        Automovil automovil = repository.findById(id).orElse(null);
        return automovil;
    }
    
    @Override
    public Automovil getAutomovil(String patente){
        List<Automovil> automovil = repository.findAll();
        for(int i=0; i<automovil.size(); i++){
            if(automovil.get(i).getPatente().equals(patente)){
                return automovil.get(i);
            }
        }
        return null;
    }
    
}
