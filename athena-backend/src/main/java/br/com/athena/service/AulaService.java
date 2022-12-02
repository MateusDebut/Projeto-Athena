package br.com.athena.service;

import br.com.athena.model.Aula;
import br.com.athena.model.Comentario;
import br.com.athena.repository.AulaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AulaService {

    private AulaRepository repository;

    @Autowired
    public AulaService(AulaRepository aulaRepository){
        this.repository = aulaRepository;
    }

    public List<Aula> getAll(){
        return repository.findAll();
    }

    public Aula getById(long id){
        return repository.findById(id).orElse(null);
    }

    public Aula post(Aula aula){
        return repository.save(aula);
    }

    public List<Comentario> getComentarios(long aulaId){
        Aula aula = repository.findById(aulaId).orElse(null);
        List<Comentario> comentarios = new ArrayList<>();
        if(aula != null){
            comentarios = aula.getComentarios();
        }
        return comentarios;
    }

}
