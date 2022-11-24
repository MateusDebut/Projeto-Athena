package br.com.athena.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Turma implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int ano;

    @ManyToOne
    @JsonIgnoreProperties("turma")
    private Professor professor;

    @OneToMany(mappedBy = "turma", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("turma")
    private List<Aluno> alunos;

    public Turma() {
    }

    public Turma(long id, int ano, List<Professor> professores, List<Aluno> alunos) {
        this.id = id;
        this.ano = ano;
        //this.professores = professores;
        this.alunos = alunos;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

   /* public List<Professor> getProfessores() {
        return professores;
    }

    public void setProfessores(List<Professor> professores) {
        this.professores = professores;
    }*/

    public List<Aluno> getAlunos() {
        return alunos;
    }

    public void setAlunos(List<Aluno> alunos) {
        this.alunos = alunos;
    }
}
