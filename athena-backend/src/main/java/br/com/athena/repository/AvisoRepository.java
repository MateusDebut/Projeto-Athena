package br.com.athena.repository;

import br.com.athena.model.Aviso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvisoRepository extends JpaRepository<Aviso, Long> {
}
