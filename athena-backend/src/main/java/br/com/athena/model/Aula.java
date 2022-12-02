package br.com.athena.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
public class Aula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String titulo;

    private String tema;

    @JsonProperty("link_video")
    private String linkVideo;

    @ManyToOne
    @JsonIgnoreProperties("aula")
    private Disciplina disciplina;

    @OneToMany(mappedBy = "aula", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("aula")
    private List<Atividade> atividades;

    @OneToMany(mappedBy = "aula", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("aula")
    private List<Comentario> comentarios;

    @Temporal(TemporalType.TIMESTAMP)
    @JsonProperty("data_de_publicacao")
    private Date dataDePublicacao = new java.sql.Date(System.currentTimeMillis());

}
