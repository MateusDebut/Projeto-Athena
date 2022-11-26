package br.com.athena.controller;

import br.com.athena.model.Comentario;
import br.com.athena.service.ComentarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comentarios")
@CrossOrigin("*")
public class ComentarioController {

    private ComentarioService comentarioService;

    @Autowired
    public ComentarioController(ComentarioService comentarioService){
        this.comentarioService = comentarioService;
    }

    @GetMapping
    public ResponseEntity<List<Comentario>> getAll(){
        return ResponseEntity.ok(this.comentarioService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comentario> getById(@PathVariable long id){
        return ResponseEntity.ok(this.comentarioService.getById(id));
    }

    @PostMapping
    public ResponseEntity<Comentario> post(@RequestBody Comentario comentario){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.comentarioService.post(comentario));
    }

}
