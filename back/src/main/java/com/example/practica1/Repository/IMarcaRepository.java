package com.example.practica1.Repository;

import com.example.practica1.Entity.Marca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMarcaRepository extends JpaRepository<Marca, Long> {
    
}
