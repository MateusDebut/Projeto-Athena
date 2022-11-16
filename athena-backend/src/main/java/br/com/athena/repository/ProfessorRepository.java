package br.com.athena.repository;

import br.com.athena.model.Disciplina;
import br.com.athena.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
    Optional<Professor> findProfessorByEmail(String email);
}
