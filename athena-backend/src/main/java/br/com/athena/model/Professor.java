package br.com.athena.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@Getter
@Setter
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nome;

    private String email;

    private String senha;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String telefone;

    @OneToMany(mappedBy = "professor", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("professor")
    private List<Disciplina> disciplinas;

    @ManyToMany
    @JoinTable(name = "Professor_Turmas",
            joinColumns = @JoinColumn(name = "professor_id"),
            inverseJoinColumns = @JoinColumn(name = "turma_id"))
    private List<Turma> turmas;

    @ManyToMany
    @JoinTable(name = "Professor_Roles",
            joinColumns = @JoinColumn(name = "professor_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<RoleModel> roles;
}
