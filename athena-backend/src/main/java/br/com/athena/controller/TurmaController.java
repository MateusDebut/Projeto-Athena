package br.com.athena.controller;

import br.com.athena.exceptions.TurmaJaExistenteException;
import br.com.athena.model.Turma;
import br.com.athena.service.TurmaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/turmas")
@CrossOrigin("*")
public class TurmaController {

    @Autowired
    private TurmaService service;

    @GetMapping
    public ResponseEntity<List<Turma>> getAll(){
        return ResponseEntity.ok(service.getTurmas());
    }

    @PostMapping
    public ResponseEntity<Turma> save(@RequestBody Turma turma) throws TurmaJaExistenteException {
        return ResponseEntity.ok(service.salvarTurma(turma));
    }

}
