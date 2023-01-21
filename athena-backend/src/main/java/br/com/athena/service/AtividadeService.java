package br.com.athena.service;

import br.com.athena.model.Atividade;
import br.com.athena.model.dto.AtividadeDTO;
import br.com.athena.repository.AtividadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AtividadeService {

    private AtividadeRepository repository;

    @Autowired
    public AtividadeService(AtividadeRepository atividadeRepository){
        this.repository = atividadeRepository;
    }

    public List<AtividadeDTO> getAll(){
        List<AtividadeDTO> atividadesDTO = new ArrayList<>();
        List<Atividade> atividades = repository.findAll();
        atividades.forEach(atividade -> {
            atividadesDTO.add(new AtividadeDTO(atividade));
        });
        return atividadesDTO;
    }

    public AtividadeDTO getById(long id){
        Atividade atividade = repository.findById(id).orElse(null);
        return new AtividadeDTO(atividade);
    }

    public Atividade post(Atividade atividade){
        return repository.save(atividade);
    }
}
