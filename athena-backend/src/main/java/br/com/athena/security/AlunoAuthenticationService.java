package br.com.athena.security;

import br.com.athena.model.Aluno;
import br.com.athena.model.dto.AlunoLoginDTO;
import br.com.athena.repository.AlunoRepository;
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

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<Aluno> user = alunoRepository.findAlunoByEmail(userName);
        user.orElseThrow(() -> new UsernameNotFoundException(userName + " not found."));
        AlunoLoginDTO alunoLoginDTO = new AlunoLoginDTO(user.get());

        return new User(alunoLoginDTO.getUsername(), alunoLoginDTO.getSenha(), true, true, true, true, alunoLoginDTO.getAuthorities());
    }
}