package br.com.athena.controller;

import br.com.athena.model.RoleModel;
import br.com.athena.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/roles")
@CrossOrigin("*")
public class RoleController {

    @Autowired
    private RoleRepository repository;

    @GetMapping
    public ResponseEntity<List<RoleModel>> getAll(){
        return ResponseEntity.ok(repository.findAll());
    }

    @PostMapping
    public ResponseEntity<RoleModel> post(@RequestBody RoleModel roleModel){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(roleModel));
    }
}
