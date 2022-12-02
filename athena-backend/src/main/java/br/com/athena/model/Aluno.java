package br.com.athena.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Getter
@Setter
public class Aluno implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String Nome;

    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String senha;

    @ManyToOne
    @JsonIgnoreProperties("aluno")
    private Turma turma;

    @ManyToMany
    @JoinTable(name = "Alunos_Roles",
                joinColumns = @JoinColumn(name = "aluno_id"),
                inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<RoleModel> roles;

    public Aluno() {
    }

    public Aluno(long id, String nome, String email, String senha, Turma turma, List<RoleModel> roles) {
        this.id = id;
        Nome = nome;
        this.email = email;
        this.senha = senha;
        this.turma = turma;
        this.roles = roles;
    }
}
