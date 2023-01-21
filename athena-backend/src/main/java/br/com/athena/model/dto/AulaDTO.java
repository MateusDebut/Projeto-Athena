package br.com.athena.model.dto;

import br.com.athena.model.Aula;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class AulaDTO {

    private long id;
    private String titulo;
    private String tema;
    @JsonProperty("disciplina_id")
    private long disciplinaId;

    @JsonProperty("link_video")
    private String linkVideo;
    private List<AtividadeDTO> atividades;

    public AulaDTO() {
    }

    public AulaDTO(Aula aula){
        this.id = aula.getId();
        this.titulo = aula.getTitulo();
        this.tema = aula.getTema();
        this.disciplinaId = aula.getDisciplina().getId();
        this.linkVideo = aula.getLinkVideo();
        this.atividades = new ArrayList<>();
        aula.getAtividades().forEach(atividade -> {
            this.atividades.add(new AtividadeDTO(atividade));
        });
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getTema() {
        return tema;
    }

    public void setTema(String tema) {
        this.tema = tema;
    }

    public String getLinkVideo() {
        return linkVideo;
    }

    public void setLinkVideo(String linkVideo) {
        this.linkVideo = linkVideo;
    }

    public long getDisciplinaId() {
        return disciplinaId;
    }

    public void setDisciplinaId(long disciplinaId) {
        this.disciplinaId = disciplinaId;
    }

    public List<AtividadeDTO> getAtividades() {
        return atividades;
    }

    public void setAtividades(List<AtividadeDTO> atividades) {
        this.atividades = atividades;
    }
}
