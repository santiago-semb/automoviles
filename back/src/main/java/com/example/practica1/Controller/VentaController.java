package com.example.practica1.Controller;

import com.example.practica1.Entity.Venta;
import com.example.practica1.Interface.IVentaService;
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
@CrossOrigin(origins = "http://localhost:4200")
public class VentaController {
    
    @Autowired
    IVentaService service;
    
    @GetMapping("/venta/traer")
    public List<Venta> getVentas(){
        List<Venta> ventas = service.getVentas();
        return ventas;
    }
    
    @GetMapping("/venta/traer/{id}")
    public Venta getVenta(@PathVariable Long id){
        Venta venta = service.getVenta(id);
        return venta;
    }
    
    @PostMapping("/venta/crear")
    public String crearVenta(@RequestBody Venta venta){
        service.crearVenta(venta);
        return "Se ha creado la venta.";
    }
    
    @DeleteMapping("/venta/eliminar/{id}")
    public String eliminarVenta(@PathVariable Long id){
        service.eliminarVenta(id);
        return "Se ha eliminado la venta.";
    }
    
    @PutMapping("/venta/actualizar/{id}")
    public Venta actualizarVenta(@PathVariable Long id,
                                 @RequestBody Venta venta){
        Venta ventaAct = service.getVenta(id);
        venta.setAsunto(venta.getAsunto());
        venta.setMonto(venta.getMonto());
        venta.setNombreComprador(venta.getNombreComprador());
        venta.setApellidoComprador(venta.getApellidoComprador());
        venta.setDniComprador(venta.getDniComprador());
        venta.setNumeroTelefonoContacto(venta.getNumeroTelefonoContacto());
        venta.setEmailContacto(venta.getEmailContacto());
        service.crearVenta(ventaAct);
        return ventaAct;
    }
    
}
