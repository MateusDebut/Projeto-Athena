package br.com.athena.controller;

import br.com.athena.model.Aluno;
import br.com.athena.model.Professor;
import br.com.athena.model.dto.AlunoLoginDTO;
import br.com.athena.model.dto.ProfessorLoginDTO;
import br.com.athena.service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/professores")
@CrossOrigin("*")
public class ProfessorController {

    private ProfessorService professorService;

    @Autowired
    public ProfessorController(ProfessorService professorService){
        this.professorService = professorService;
    }

    @GetMapping
    public ResponseEntity<List<Professor>> getAll(){
        return ResponseEntity.ok(this.professorService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Professor> getById(@PathVariable long id){
        return ResponseEntity.ok(this.professorService.getById(id));
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Professor> save(@RequestBody Professor professor) {
        return ResponseEntity.ok(professorService.salvarProfessor(professor));
    }

    @PostMapping("/logar")
    public ResponseEntity<ProfessorLoginDTO> authentification(@RequestBody ProfessorLoginDTO professorLoginDTO) {
        ProfessorLoginDTO professor = professorService.logar(professorLoginDTO);
        if(professor.getEmail() != null){
            return ResponseEntity.ok(professor);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

}
