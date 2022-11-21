package br.com.athena.service;

import br.com.athena.model.Aluno;
import br.com.athena.model.RoleModel;
import br.com.athena.model.dto.AlunoLoginDTO;
import br.com.athena.repository.AlunoRepository;
import br.com.athena.repository.TurmaRepository;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {
    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private TurmaRepository turmaRepository;

    public List<Aluno> getAlunos(){
        return alunoRepository.findAll();
    }

    public Aluno salvarAluno(Aluno alunoEnviado) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String senhaEncoder = encoder.encode(alunoEnviado.getSenha());
        alunoEnviado.setSenha(senhaEncoder);
        alunoRepository.save(alunoEnviado);
        return alunoEnviado;
    }

    public AlunoLoginDTO logar(AlunoLoginDTO user){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        Optional<Aluno> usuario = alunoRepository.findAlunoByEmail(user.getEmail());

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
