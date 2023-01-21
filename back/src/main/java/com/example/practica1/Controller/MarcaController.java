package com.example.practica1.Controller;

import com.example.practica1.Entity.Marca;
import com.example.practica1.Interface.IMarcaService;
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
public class MarcaController {
    
    @Autowired
    IMarcaService service;
    
    @GetMapping("/marca/traer")
    public List<Marca> getMarcas(){
        List<Marca> marcas = service.getMarcas();
        return marcas;
    }
    
    @GetMapping("/marca/traer/{id}")
    public Marca getMarca(@PathVariable Long id){
        Marca marca = service.getMarca(id);
        return marca;
    }
    
    @GetMapping("/marca/get/{nombreMarca}")
    public Marca getMarcaByName(@PathVariable String nombreMarca){
        Marca marca = service.getMarca(nombreMarca);
        return marca;
    }
    
    @PostMapping("/marca/crear")
    public String crearMarca(@RequestBody Marca marca){
        service.crearMarca(marca);
        return "Marca insertada correctamente.";
    }
    
    @DeleteMapping("/marca/eliminar/{id}")
    public String eliminarMarca(@PathVariable Long id){
        service.eliminarMarca(id);
        return "Marca eliminada correctamente.";
    }
    
    @PutMapping("/marca/actualizar/{id}")
    public Marca actualizarMarca(@PathVariable Long id,
                                 @RequestParam("nombre") String nombre,
                                 @RequestParam("img") String img){
        Marca marca = service.getMarca(id);
        marca.setNombre(nombre);
        marca.setImg(img);
        
        service.crearMarca(marca);
        return marca;
    }
    
}
