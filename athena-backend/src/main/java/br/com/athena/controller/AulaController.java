package br.com.athena.controller;

import br.com.athena.model.Aula;
import br.com.athena.model.Comentario;
import br.com.athena.model.dto.AulaDTO;
import br.com.athena.service.AulaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/aulas")
@CrossOrigin("*")
public class AulaController {

    private AulaService aulaService;

    @Autowired
    public AulaController(AulaService aulaService){
        this.aulaService = aulaService;
    }

    @GetMapping
    public ResponseEntity<List<AulaDTO>> getAll(){
        return ResponseEntity.ok(this.aulaService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AulaDTO> getById(@PathVariable long id){
        return ResponseEntity.ok(this.aulaService.getById(id));
    }

    @GetMapping("/{id}/comentarios")
    public ResponseEntity<List<Comentario>> getComentaiosAula(@PathVariable long id){
        return ResponseEntity.ok(this.aulaService.getComentarios(id));
    }

    @PostMapping
    public ResponseEntity<Aula> post(@RequestBody Aula aula){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.aulaService.post(aula));
    }

}
