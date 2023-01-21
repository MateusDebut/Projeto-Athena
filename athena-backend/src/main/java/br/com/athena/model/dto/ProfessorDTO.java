package br.com.athena.model.dto;

import br.com.athena.model.Disciplina;
import br.com.athena.model.Professor;
import br.com.athena.model.Turma;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProfessorDTO {
    private long id;

    private String nome;

    private String email;

    private List<Disciplina> disciplinas;

    private List<TurmaDTO> turmas;

    public ProfessorDTO() {
    }

    public ProfessorDTO(Professor professor) {
        this.id = professor.getId();
        this.nome = professor.getNome();
        this.email = professor.getEmail();
        this.turmas = new ArrayList<>();
        professor.getTurmas().forEach(turma -> {
            this.turmas.add(new TurmaDTO(turma));
        });
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Disciplina> getDisciplinas() {
        return disciplinas;
    }

    public void setDisciplinas(List<Disciplina> disciplinas) {
        this.disciplinas = disciplinas;
    }

    public List<TurmaDTO> getTurmas() {
        return turmas;
    }

    public void setTurmas(List<TurmaDTO> turmas) {
        this.turmas = turmas;
    }
}
