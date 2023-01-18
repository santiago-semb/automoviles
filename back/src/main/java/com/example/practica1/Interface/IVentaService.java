package com.example.practica1.Interface;

import com.example.practica1.Entity.Venta;
import java.util.List;

public interface IVentaService {
    public List<Venta> getVentas();
    public Venta getVenta(Long id);
    public void crearVenta(Venta venta);
    public void eliminarVenta(Long id);
}
