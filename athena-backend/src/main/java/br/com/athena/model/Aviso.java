package br.com.athena.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Aviso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String titulo;

    private String texto;

    @ManyToOne
    @JsonIgnoreProperties("aviso")
    private Disciplina disciplina;

    @Temporal(TemporalType.TIMESTAMP)
    @JsonProperty("data_de_publicacao")
    private Date dataDePublicacao = new java.sql.Date(System.currentTimeMillis());


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public Disciplina getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(Disciplina disciplina) {
        this.disciplina = disciplina;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getDataDePublicacao() {
        return dataDePublicacao;
    }

    public void setDataDePublicacao(Date dataDePublicacao) {
        this.dataDePublicacao = dataDePublicacao;
    }
}
