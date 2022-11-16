package br.com.athena.controller;

import br.com.athena.model.Aluno;
import br.com.athena.model.dto.AlunoLoginDTO;
import br.com.athena.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/alunos")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @GetMapping
    public ResponseEntity<List<Aluno>> getAll(){
        System.out.println("Chegou aqui");
        return ResponseEntity.ok(alunoService.getAlunos());
    }


    @PostMapping("/cadastrar")
    public ResponseEntity<Aluno> save(@RequestBody Aluno aluno) {
        return ResponseEntity.ok(alunoService.salvarAluno(aluno));
    }

    @PostMapping("/logar")
    public ResponseEntity<AlunoLoginDTO> authentification(@RequestBody AlunoLoginDTO aluno) {
        AlunoLoginDTO alunoLoginDTO = alunoService.logar(aluno);
        if(alunoLoginDTO.getEmail() != null){
            return ResponseEntity.ok(alunoLoginDTO);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

}
