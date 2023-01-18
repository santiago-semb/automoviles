package com.example.practica1.Repository;

import com.example.practica1.Entity.Publicacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPublicacionRepository extends JpaRepository<Publicacion, Long> {
    
}
