package br.com.athena.service;

import br.com.athena.model.Comentario;
import br.com.athena.repository.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComentarioService {

    private ComentarioRepository repository;

    @Autowired
    public ComentarioService(ComentarioRepository comentarioRepository){
        this.repository = comentarioRepository;
    }

    public List<Comentario> getAll(){
        return repository.findAll();
    }

    public Comentario getById(long id){
        return repository.findById(id).orElse(null);
    }

    public Comentario post(Comentario comentario){
        return repository.save(comentario);
    }

}
