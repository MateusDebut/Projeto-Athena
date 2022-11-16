package br.com.athena.service;

import br.com.athena.model.Atividade;
import br.com.athena.repository.AtividadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AtividadeService {

    private AtividadeRepository repository;

    @Autowired
    public AtividadeService(AtividadeRepository atividadeRepository){
        this.repository = atividadeRepository;
    }

    public List<Atividade> getAll(){
        return repository.findAll();
    }

    public Atividade getById(long id){
        return repository.findById(id).orElse(null);
    }

    public Atividade post(Atividade atividade){
        return repository.save(atividade);
    }
}
