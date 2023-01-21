package com.example.practica1.Controller;

import com.example.practica1.Entity.Publicacion;
import com.example.practica1.Interface.IPublicacionService;
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
public class PublicacionController {
    
    @Autowired
    IPublicacionService service;
    
    @GetMapping("/publicacion/traer")
    public List<Publicacion> getPublicaciones(){
        List<Publicacion> publicaciones = service.getPublicaciones();
        return publicaciones;
    }
    
    @GetMapping("/publicacion/traer/{id}")
    public Publicacion getPublicacion(@PathVariable Long id){
        Publicacion publicacion = service.getPublicacion(id);
        return publicacion;
    }
    
    @GetMapping("/publicacion/get/{automovil}")
    public Publicacion getPublicacionByAutomovil(@PathVariable String automovil){
        Publicacion publicacion = service.getPublicacionByAutomovil(automovil);
        return publicacion;
    }
    
    @PostMapping("/publicacion/crear")
    public String crearPublicacion(@RequestBody Publicacion publicacion){
        service.crearPublicacion(publicacion);
        return "Se ha creado la publicacion.";
    }
    
    @DeleteMapping("/publicacion/eliminar/{id}")
    public String eliminarPublicacion(@PathVariable Long id){
        service.eliminarPublicacion(id);
        return "Se ha eliminado la publicacion.";
    }
    
    @PutMapping("/publicacion/actualizar/{id}")
    public Publicacion actualizarPublicacion(@PathVariable Long id,
                                             @RequestBody Publicacion publicacion){
        Publicacion publicacionAct = service.getPublicacion(id);
        publicacionAct.setAutomovil(publicacion.getAutomovil());
        publicacionAct.setPrecio(publicacion.getPrecio());
        publicacionAct.setDescripcion(publicacion.getDescripcion());
        
        service.crearPublicacion(publicacionAct);
        return publicacionAct;      
    }
    
}
