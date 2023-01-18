package com.example.practica1.Service;

import com.example.practica1.Entity.Marca;
import com.example.practica1.Interface.IMarcaService;
import com.example.practica1.Repository.IMarcaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpMarcaService implements IMarcaService{
    
    @Autowired
    IMarcaRepository repository;

    @Override
    public List<Marca> getMarcas() {
        List<Marca> marcas = repository.findAll();
        return marcas;
    }

    @Override
    public Marca getMarca(Long id) {
        Marca marca = repository.findById(id).orElse(null);
        return marca;
    }
    
    @Override
    public Marca getMarca(String nombreMarca){
        List<Marca> marca = repository.findAll();
        for(int i=0; i<marca.size(); i++){
            if(marca.get(i).getNombre().equals(nombreMarca)){
                return marca.get(i);
            }
        }
        return null;
    }

    @Override
    public void crearMarca(Marca marca) {
        repository.save(marca);
    }

    @Override
    public void eliminarMarca(Long id) {
        repository.deleteById(id);
    }
    
}
