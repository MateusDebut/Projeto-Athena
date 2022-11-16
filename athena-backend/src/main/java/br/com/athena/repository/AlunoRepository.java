package br.com.athena.repository;

import br.com.athena.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Long> {

    //List<Aluno> getAlunoByNomeContainingIgnoreCase(String nome);
    Optional<Aluno> findAlunoByEmail(String email);

}
