package br.com.athena.security;

import br.com.athena.model.Professor;
import br.com.athena.model.dto.ProfessorLoginDTO;
import br.com.athena.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class ProfessorAuthenticationService implements UserDetailsService {

    @Autowired
    private ProfessorRepository professorRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<Professor> user = professorRepository.findProfessorByEmail(userName);
        user.orElseThrow(() -> new UsernameNotFoundException(userName + " not found."));

        ProfessorLoginDTO professorLoginDTO = new ProfessorLoginDTO(user.get());

        return new User(professorLoginDTO.getUsername(), null, true, true, true, true, professorLoginDTO.getAuthorities());
    }
}
