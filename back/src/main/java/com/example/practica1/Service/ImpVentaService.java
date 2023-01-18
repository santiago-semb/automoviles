package com.example.practica1.Service;

import com.example.practica1.Entity.Venta;
import com.example.practica1.Interface.IVentaService;
import com.example.practica1.Repository.IVentaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpVentaService implements IVentaService {
    
    @Autowired
    IVentaRepository repository;

    @Override
    public List<Venta> getVentas() {
        List<Venta> ventas = repository.findAll();
        return ventas;
    }

    @Override
    public Venta getVenta(Long id) {
        Venta venta = repository.findById(id).orElse(null);
        return venta;
    }

    @Override
    public void crearVenta(Venta venta) {
        repository.save(venta);
    }

    @Override
    public void eliminarVenta(Long id) {
        repository.deleteById(id);
    }
    
}
