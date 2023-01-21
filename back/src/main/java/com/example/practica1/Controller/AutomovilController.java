package com.example.practica1.Controller;

import com.example.practica1.Entity.Automovil;
import com.example.practica1.Interface.IAutomovilService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AutomovilController {
    
    @Autowired
    IAutomovilService service;
    
    @GetMapping("/automovil/traer")
    public List<Automovil> getAutomoviles(){
        return service.getAutomovil();
    }
    
    @PostMapping("/automovil/crear")
    public String crearAutomovil(@RequestBody Automovil automovil){
        service.insertarAutomovil(automovil);
        return "Se ha creado el automovil.";
    }
    
    @DeleteMapping("/automovil/eliminar/{id}")
    public String eliminarAutomovil(@PathVariable Long id){
        service.eliminarAutomovil(id);
        return "Se ha eliminado el automovil.";
    }
    
    @GetMapping("/automovil/traer/{id}")
    public Automovil getAutomovilById(@PathVariable Long id){
        Automovil automovil = service.getAutomovil(id);
        return automovil;
    }
    
    @GetMapping("/automovil/get/{patente}")
    public Automovil getAutomovilByPatente(@PathVariable String patente){
        Automovil automovil = service.getAutomovil(patente);
        return automovil;
    }
    
    @PutMapping("/automovil/actualizar/{id}")
    public Automovil actualizarAutomovil(@PathVariable Long id,
                                         @RequestBody Automovil auto
                                         ){
        Automovil automovil = service.getAutomovil(id);
        automovil.setModelo(auto.getModelo());
        automovil.setMarca(auto.getMarca());
        automovil.setPrecio(auto.getPrecio());
        automovil.setColor(auto.getColor());
        automovil.setPatente(auto.getPatente());
        service.insertarAutomovil(automovil);
        return automovil;
    }
    
}
