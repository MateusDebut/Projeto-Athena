package br.com.athena.controller;

import br.com.athena.model.Atividade;
import br.com.athena.model.dto.AtividadeDTO;
import br.com.athena.service.AtividadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/atividades")
@CrossOrigin("*")
public class AtividadeController {

    private AtividadeService atividadeService;

    @Autowired
    public AtividadeController(AtividadeService atividadeService){
        this.atividadeService = atividadeService;
    }

    @GetMapping
    public ResponseEntity<List<AtividadeDTO>> getAll(){
        return ResponseEntity.ok(this.atividadeService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AtividadeDTO> getById(@PathVariable long id){
        return ResponseEntity.ok(this.atividadeService.getById(id));
    }

    @PostMapping
    public ResponseEntity<Atividade> post(@RequestBody Atividade atividade){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.atividadeService.post(atividade));
    }

}
