package br.com.athena.repository;

import br.com.athena.model.Aula;
import br.com.athena.model.Disciplina;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AulaRepository extends JpaRepository<Aula, Long> {
}
