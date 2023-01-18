package com.example.practica1.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Modelo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    private String nombre;
    
    @NotNull
    private String img;
    
    @NotNull
    private String marca;
    
    public Modelo() { }

    public Modelo(String nombre, String marca, String img) {
        this.nombre = nombre;
        this.marca = marca;
        this.img = img;
    }
    
}
