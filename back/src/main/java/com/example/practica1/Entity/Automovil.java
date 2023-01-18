package com.example.practica1.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Automovil {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min=1,max=35, message="El modelo debe tener entre 1 y 35 caracteres.")
    private String modelo;
    
    @NotNull
    @Size(min=1,max=50, message="La marca debe tener entre 1 y 50 caracteres.")
    private String marca;
 
    @NotNull
    @Min(value=1, message="El precio debe ser mayor a 1.")
    private double precio;
    
    @NotNull
    @Size(min=1,max=35, message="El color debe tener entre 1 y 35 caracteres.")
    private String color;
    
    @NotNull
    @Size(min=1,max=10, message="La patente debe tener entre 1 y 10 caracteres.")
    private String patente;
    
    public Automovil(){ }

    public Automovil(String modelo, String marca, double precio, String color, String patente) {
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.color = color;
        this.patente = patente;
    }
    
    
    
}
