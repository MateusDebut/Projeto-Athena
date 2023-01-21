package br.com.athena.service;

import br.com.athena.model.Aula;
import br.com.athena.model.Comentario;
import br.com.athena.model.dto.AulaDTO;
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

    public List<AulaDTO> getAll(){
        List<AulaDTO> aulasDTO = new ArrayList<>();
        List<Aula> aulas = repository.findAll();
        aulas.forEach(aula -> {
            aulasDTO.add(new AulaDTO(aula));
        });
        return aulasDTO;
    }

    public AulaDTO getById(long id){
        Aula aula = repository.findById(id).orElse(null);
        AulaDTO aulaDTO = new AulaDTO(aula);
        return aulaDTO;
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
