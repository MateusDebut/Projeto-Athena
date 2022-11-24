package br.com.athena.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
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

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return Nome;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Turma getTurma() {
        return turma;
    }

    public void setTurma(Turma turma) {
        this.turma = turma;
    }

    public List<RoleModel> getRoles() {
        return roles;
    }

    public void setRoles(List<RoleModel> roles) {
        this.roles = roles;
    }
}
