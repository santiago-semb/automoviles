package com.example.practica1.Controller;

import com.example.practica1.Entity.Modelo;
import com.example.practica1.Interface.IModeloService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ModeloController {
    
    @Autowired
    IModeloService service;
    
    @GetMapping("/modelo/traer")
    public List<Modelo> getModelos(){
        List<Modelo> modelos = service.getModelos();
        return modelos;
    }
    
    @GetMapping("/modelo/traerme/{nombreMarca}")
    public List<Modelo> getModelos(@PathVariable String nombreMarca){
        List<Modelo> modelos = service.getModelosByMarca(nombreMarca);
        return modelos;
    }
    
    @GetMapping("/modelo/traer/{id}")
    public Modelo getModelo(@PathVariable Long id){
        Modelo modelo = service.getModelo(id);
        return modelo;
    }
    
    @GetMapping("/modelo/get/{nombreModelo}")
    public Modelo getModelo(@PathVariable String nombreModelo){
        Modelo modelo = service.getModelo(nombreModelo);
        return modelo;
    }
    
    @GetMapping("/modelo/traeme/{nombreMarca}")
    public Modelo getModeloByMarca(@PathVariable String nombreMarca){
        Modelo modelo = service.getModeloByMarca(nombreMarca);
        return modelo;
    }
    
    @PostMapping("/modelo/crear")
    public String crearModelo(@RequestBody Modelo modelo){
        service.crearModelo(modelo);
        return "Se ha insertado el modelo.";
    }
    
    @DeleteMapping("/modelo/eliminar/{id}")
    public String eliminarModelo(@PathVariable Long id){
        service.eliminarModelo(id);
        return "Se ha eliminado el modelo.";
    }
    
    @PutMapping("/modelo/actualizar/{id}")
    public Modelo actualizarModelo(@PathVariable Long id,
                                   @RequestParam("nombre") String nombre,
                                   @RequestParam("img") String img){
        Modelo modelo = service.getModelo(id);
        modelo.setNombre(nombre);
        modelo.setImg(img);
        
        service.crearModelo(modelo);
        return modelo;
    }
    
}
