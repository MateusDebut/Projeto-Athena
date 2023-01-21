package br.com.athena.service;

import br.com.athena.model.Aviso;
import br.com.athena.model.dto.AvisoDTO;
import br.com.athena.repository.AvisoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AvisoService {

    @Autowired
    private AvisoRepository repository;

    public List<AvisoDTO> getAll(){
        List<Aviso> avisos = repository.findAll();
        List<AvisoDTO> avisoDTOList = new ArrayList<>();
        avisos.forEach(aviso -> {
            avisoDTOList.add(new AvisoDTO(aviso));
        });

        return avisoDTOList
                .stream()
                .filter(avisoDTO -> avisoDTO.getDataDePublicacao() != null)
                .sorted((o1,o2) -> o2.getDataDePublicacao().compareTo(o1.getDataDePublicacao()))
                .collect(Collectors.toList());
    }

    public AvisoDTO getById(long id){
        Aviso aviso = repository.findById(id).orElse(null);
        return new AvisoDTO(aviso);
    }

    public Aviso save(Aviso aviso){
        return repository.save(aviso);
    }

}
