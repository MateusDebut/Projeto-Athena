package br.com.athena.service;

import br.com.athena.model.Turma;
import br.com.athena.repository.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TurmaService {

    @Autowired
    private TurmaRepository turmaRepository;

    public List<Turma> getTurmas(){
        return turmaRepository.findAll();
    }

    public Optional<Turma> getTurmaByAno(int ano){
        return turmaRepository.getTurmaByAno(ano);
    }

    public Turma salvarTurma(Turma turmaEnviada) {
        turmaRepository.save(turmaEnviada);
        return turmaEnviada;
    }

}
