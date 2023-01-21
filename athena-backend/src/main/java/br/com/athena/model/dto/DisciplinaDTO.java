package br.com.athena.model.dto;

import br.com.athena.model.Disciplina;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DisciplinaDTO {

    private long id;

    private String nome;

    @JsonProperty("imagem")
    private String linkImagem;

    private ProfessorDTO professor;

    private List<AulaDTO> aulas;

    private List<AvisoDTO> avisos;

    public DisciplinaDTO() {
    }

    public DisciplinaDTO(Disciplina disciplina) {
        this.id = disciplina.getId();
        this.nome = disciplina.getNome();
        this.professor = new ProfessorDTO(disciplina.getProfessor());
        this.linkImagem = disciplina.getLinkImagem();
        this.aulas = new ArrayList<>();
        disciplina.getAulas().stream()
                .sorted((o1,o2) -> (int) (o2.getId() - o1.getId()))
                .collect(Collectors.toList())
                .forEach(aula -> {
                    this.aulas.add(new AulaDTO(aula));
                });
        this.avisos = new ArrayList<>();
        disciplina.getAvisos().stream()
                .filter(avisoDTO -> avisoDTO.getDataDePublicacao() != null)
                .sorted((o1,o2) -> o2.getDataDePublicacao().compareTo(o1.getDataDePublicacao()))
                .collect(Collectors.toList())
                .forEach(aviso -> {
                    this.avisos.add(new AvisoDTO(aviso));
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

    public String getLinkImagem() {
        return linkImagem;
    }

    public void setLinkImagem(String linkImagem) {
        this.linkImagem = linkImagem;
    }

    public ProfessorDTO getProfessor() {
        return professor;
    }

    public void setProfessor(ProfessorDTO professor) {
        this.professor = professor;
    }

    public List<AulaDTO> getAulas() {
        return aulas;
    }

    public void setAulas(List<AulaDTO> aulas) {
        this.aulas = aulas;
    }

    public List<AvisoDTO> getAvisos() {
        return avisos;
    }

    public void setAvisos(List<AvisoDTO> avisos) {
        this.avisos = avisos;
    }
}
