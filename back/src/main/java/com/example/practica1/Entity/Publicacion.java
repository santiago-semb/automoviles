package com.example.practica1.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Publicacion {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min=1,max=50, message="El automovil debe tener entre 1 y 50 caracteres.")
    private String automovil;
    
    @NotNull
    private double precio;
    
    @NotNull
    @Size(min=1,max=500, message="La descripcion debe tener entre 1 y 500 caracteres.")
    private String descripcion;
    
    @NotNull
    @Size(min=1,max=50, message="El color debe tener entre 1 y 50 caracteres.")
    private String color;
    
    @NotNull
    private String motor;
    
    @NotNull
    private int kilometros;
    
    @NotNull
    private String modelo;
    
    @NotNull
    private String telefono;
    
    @NotNull
    @Email
    private String email;
    
    private String masInfoDeContacto;
    
    
}
