package br.com.athena.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
public class Turma implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int ano;

    @ManyToOne
    @JsonIgnoreProperties("disciplina")
    private Disciplina disciplina;

    @ManyToMany
    @JoinTable(name = "Turma_Professores",
            joinColumns = @JoinColumn(name = "turma_id"),
            inverseJoinColumns = @JoinColumn(name = "professor_id"))
    private List<Professor> professores;

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
}
