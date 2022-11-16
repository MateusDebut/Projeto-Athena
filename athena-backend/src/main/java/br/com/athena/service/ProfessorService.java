package br.com.athena.service;

import br.com.athena.model.Aluno;
import br.com.athena.model.Professor;
import br.com.athena.model.dto.ProfessorLoginDTO;
import br.com.athena.model.dto.ProfessorLoginDTO;
import br.com.athena.repository.ProfessorRepository;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.Charset;
import java.util.List;
import java.util.Optional;

@Service
public class ProfessorService {

    private ProfessorRepository repository;

    @Autowired
    public ProfessorService(ProfessorRepository professorRepository){
        this.repository = professorRepository;
    }

    public List<Professor> getAll(){
        return repository.findAll();
    }

    public Professor getById(long id){
        return repository.findById(id).orElse(null);
    }

    public Professor salvarProfessor(Professor professor) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String senhaEncoder = encoder.encode(professor.getSenha());
        professor.setSenha(senhaEncoder);
        repository.save(professor);
        return professor;
    }

    public ProfessorLoginDTO logar(ProfessorLoginDTO user){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Optional<Professor> usuario = repository.findProfessorByEmail(user.getEmail());

        if(usuario.isPresent()) {
            if(encoder.matches(user.getSenha(), usuario.get().getSenha())) {

                String auth = user.getEmail() + ':' + user.getSenha();
                byte[] encodeAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
                String authHeader = "Basic " + new String(encodeAuth);

                user.setToken(authHeader);
                user.setId(usuario.get().getId());
                user.setNome(usuario.get().getNome());
                user.setEmail(usuario.get().getEmail());
                user.setAuth(usuario.get().getRoles());

                return user;
            }
        }
        return null;
    }

}
