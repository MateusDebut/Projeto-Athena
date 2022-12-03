package br.com.athena.model.dto;

import br.com.athena.model.Disciplina;
import br.com.athena.model.Professor;
import br.com.athena.model.RoleModel;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
public class ProfessorLoginDTO implements UserDetails, Serializable {

    private long id;

    private String nome;

    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String senha;

    private String token;

    private List<RoleModel> auth;

    @OneToMany(mappedBy = "professor", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("professor")
    private List<Disciplina> disciplinas;

    public ProfessorLoginDTO(){}

    public ProfessorLoginDTO(Professor professor) {
        this.email = professor.getEmail();
        this.senha = professor.getSenha();
        this.id = professor.getId();
        this.nome = professor.getNome();
        this.auth = professor.getRoles();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.getAuth();
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
