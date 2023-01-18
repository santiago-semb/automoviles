package com.example.practica1.Entity;


import java.util.Calendar;
import java.util.GregorianCalendar;
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
public class Venta {
    
    Calendar cal = GregorianCalendar.getInstance();
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min=1,max=75, message="El asunto debe tener entre 1 y 75 caracteres.")
    private String asunto;
    
    @NotNull
    private double monto;
    
    @NotNull
    private String fecha = cal.getTime().toLocaleString();
    
    @NotNull
    @Size(min=1,max=75, message="El nombre del comprador debe tener entre 1 y 75 caracteres.")
    private String nombreComprador;
    
    @NotNull
    @Size(min=1,max=75, message="El apellido del comprador debe tener entre 1 y 75 caracteres.")
    private String apellidoComprador;
    
    @NotNull
    private int dniComprador;
    
    @NotNull
    private String numeroTelefonoContacto;
    
    @NotNull
    @Email
    private String emailContacto;
    
    public Venta() { }
    
    public Venta(String asunto, double monto, String fecha, String nombreComprador, String apellidoComprador, int dniComprador, String numeroTelefonoContacto, String emailContacto) {
        this.asunto = asunto;
        this.monto = monto;
        this.fecha = fecha;
        this.nombreComprador = nombreComprador;
        this.apellidoComprador = apellidoComprador;
        this.dniComprador = dniComprador;
        this.numeroTelefonoContacto = numeroTelefonoContacto;
        this.emailContacto = emailContacto;
    }
    
}
