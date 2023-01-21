package br.com.athena.security;

import br.com.athena.model.Aluno;
import br.com.athena.model.Professor;
import br.com.athena.model.dto.AlunoLoginDTO;
import br.com.athena.model.dto.ProfessorLoginDTO;
import br.com.athena.repository.AlunoRepository;
import br.com.athena.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class AlunoAuthenticationService implements UserDetailsService {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private ProfessorRepository professorRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<Aluno> userAluno = alunoRepository.findAlunoByEmail(userName);
        if(userAluno.isPresent()) {
            AlunoLoginDTO alunoLoginDTO = new AlunoLoginDTO(userAluno.get());
            return new User(alunoLoginDTO.getUsername(), alunoLoginDTO.getSenha(), true, true, true, true, alunoLoginDTO.getAuthorities());

        }

        Optional<Professor> userProfessor = professorRepository.findProfessorByEmail(userName);
        userProfessor.orElseThrow(() -> new UsernameNotFoundException(userName + " not found."));
        ProfessorLoginDTO professorLoginDTO = new ProfessorLoginDTO(userProfessor.get());

        return new User(professorLoginDTO.getUsername(), professorLoginDTO.getPassword(), true, true, true, true, professorLoginDTO.getAuthorities());
    }
}