package br.com.athena.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Getter
@Setter
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nome;

    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String senha;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String telefone;

    @OneToMany(mappedBy = "professor", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("professor")
    private List<Disciplina> disciplinas;

    @OneToMany(mappedBy = "professor", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("professor")
    private List<Turma> turmas;

    @ManyToMany
    @JoinTable(name = "Professor_Roles",
            joinColumns = @JoinColumn(name = "professor_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<RoleModel> roles;
}
