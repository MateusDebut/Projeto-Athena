package br.com.athena.model.dto;

import br.com.athena.model.Aviso;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class AvisoDTO {

    private long id;

    private String titulo;

    private String texto;

    @JsonProperty("disciplina_id")
    private long disciplinaId;

    @JsonProperty("data_de_publicacao")
    private Date dataDePublicacao;


    public AvisoDTO() {
    }

    public AvisoDTO(Aviso aviso) {
        this.id = aviso.getId();
        this.titulo = aviso.getTitulo();
        this.texto = aviso.getTexto();
        this.disciplinaId = aviso.getDisciplina().getId();
        this.dataDePublicacao = aviso.getDataDePublicacao();
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

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public long getDisciplinaId() {
        return disciplinaId;
    }

    public void setDisciplinaId(long disciplinaId) {
        this.disciplinaId = disciplinaId;
    }

    public Date getDataDePublicacao() {
        return dataDePublicacao;
    }

    public void setDataDePublicacao(Date dataDePublicacao) {
        this.dataDePublicacao = dataDePublicacao;
    }
}
