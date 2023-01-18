package com.example.practica1.Repository;

import com.example.practica1.Entity.Automovil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAutomovilRepository extends JpaRepository<Automovil, Long>{
    
}
