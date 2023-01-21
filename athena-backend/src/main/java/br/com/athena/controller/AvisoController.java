package br.com.athena.controller;

import br.com.athena.model.Aviso;
import br.com.athena.model.dto.AvisoDTO;
import br.com.athena.service.AvisoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("avisos")
@CrossOrigin("*")
public class AvisoController {

    @Autowired
    private AvisoService service;

    @GetMapping
    public ResponseEntity<List<AvisoDTO>> getAll(){
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AvisoDTO> getById(@PathVariable long id){
        return ResponseEntity.ok(service.getById(id));
    }

    @PostMapping
    public ResponseEntity<Aviso> save(@RequestBody Aviso aviso){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(service.save(aviso));
    }

}
