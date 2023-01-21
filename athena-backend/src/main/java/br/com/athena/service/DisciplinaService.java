package br.com.athena.service;

import br.com.athena.model.Disciplina;
import br.com.athena.model.dto.DisciplinaDTO;
import br.com.athena.repository.DisciplinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DisciplinaService {

    private DisciplinaRepository repository;

    @Autowired
    public DisciplinaService(DisciplinaRepository disciplinaRepository){
        this.repository = disciplinaRepository;
    }

    public List<DisciplinaDTO> getAll(){
        List<Disciplina> disciplinas = repository.findAll();
        List<DisciplinaDTO> disciplinaDTOS = new ArrayList<>();
        disciplinas.forEach(disciplina -> {
            disciplinaDTOS.add(new DisciplinaDTO(disciplina));
        });
        return disciplinaDTOS;
    }

    public DisciplinaDTO getById(long id){
        Disciplina disciplina = repository.findById(id).orElse(null);
        return new DisciplinaDTO(disciplina);
    }

    public Disciplina post(Disciplina disciplina){
        return repository.save(disciplina);
    }

}
