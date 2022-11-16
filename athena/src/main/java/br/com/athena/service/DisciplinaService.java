package br.com.athena.service;

import br.com.athena.model.Disciplina;
import br.com.athena.repository.DisciplinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DisciplinaService {

    private DisciplinaRepository repository;

    @Autowired
    public DisciplinaService(DisciplinaRepository disciplinaRepository){
        this.repository = disciplinaRepository;
    }

    public List<Disciplina> getAll(){
        return repository.findAll();
    }

    public Disciplina getById(long id){
        return repository.findById(id).orElse(null);
    }

    public Disciplina post(Disciplina disciplina){
        return repository.save(disciplina);
    }

}
