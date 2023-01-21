package br.com.athena.model.dto;

import br.com.athena.model.Aluno;
import br.com.athena.model.Professor;
import br.com.athena.model.Turma;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.CascadeType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TurmaDTO {

    private long id;

    private int ano;

    @JsonProperty("professores_id")
    private List<Long> professoresId;

    private List<Aluno> alunos;

    public TurmaDTO() {
    }

    public TurmaDTO(Turma turma) {
        this.id = turma.getId();
        this.ano = turma.getAno();
        this.professoresId = new ArrayList<>();
        turma.getProfessores().forEach(professor -> {
            this.professoresId.add(professor.getId());
        });
        this.alunos = new ArrayList<>();
        turma.getAlunos().forEach(aluno -> {
            this.alunos.add(aluno);
        });
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

    public List<Long> getProfessoresId() {
        return professoresId;
    }

    public void setProfessoresId(List<Long> professoresId) {
        this.professoresId = professoresId;
    }

    public List<Aluno> getAlunos() {
        return alunos;
    }

    public void setAlunos(List<Aluno> alunos) {
        this.alunos = alunos;
    }
}
