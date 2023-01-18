package com.example.practica1.Repository;

import com.example.practica1.Entity.Modelo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IModeloRepository extends JpaRepository<Modelo, Long> {
    
}
