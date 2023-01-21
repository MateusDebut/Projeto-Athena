package br.com.athena.model.dto;

import br.com.athena.model.Atividade;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class AtividadeDTO {
    private long id;
    private String titulo;
    private String descricao;
    private String link;
    @JsonProperty("aula_id")
    private long aulaId;

    @JsonProperty("data_de_publicacao")
    private Date dataDePublicacao = new java.sql.Date(System.currentTimeMillis());

    @JsonProperty("data_de_entrega")
    private Date dataDeEntrega;

    public AtividadeDTO() {
    }

    public AtividadeDTO(Atividade atividade){
        this.id = atividade.getId();
        this.titulo = atividade.getTitulo();
        this.descricao = atividade.getDescricao();
        this.link = atividade.getLink();
        this.aulaId = atividade.getAula().getId();
        this.dataDePublicacao = atividade.getDataDePublicacao();
        this.dataDeEntrega = atividade.getDataDeEntrega();
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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public long getAulaId() {
        return aulaId;
    }

    public void setAulaId(long aulaId) {
        this.aulaId = aulaId;
    }

    public Date getDataDePublicacao() {
        return dataDePublicacao;
    }

    public void setDataDePublicacao(Date dataDePublicacao) {
        this.dataDePublicacao = dataDePublicacao;
    }

    public Date getDataDeEntrega() {
        return dataDeEntrega;
    }

    public void setDataDeEntrega(Date dataDeEntrega) {
        this.dataDeEntrega = dataDeEntrega;
    }
}
