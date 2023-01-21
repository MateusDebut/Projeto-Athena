package br.com.athena.controller;

import br.com.athena.model.Disciplina;
import br.com.athena.model.dto.DisciplinaDTO;
import br.com.athena.service.DisciplinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/disciplinas")
@CrossOrigin("*")
public class DisciplinaController {

    private DisciplinaService disciplinaService;

    @Autowired
    public DisciplinaController(DisciplinaService disciplinaService){
        this.disciplinaService = disciplinaService;
    }

    @GetMapping
    public ResponseEntity<List<DisciplinaDTO>> getAll(){
        return ResponseEntity.ok(this.disciplinaService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DisciplinaDTO> getById(@PathVariable long id){
        return ResponseEntity.ok(this.disciplinaService.getById(id));
    }

    @PostMapping
    public ResponseEntity<Disciplina> post(@RequestBody Disciplina disciplina){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.disciplinaService.post(disciplina));
    }

}
