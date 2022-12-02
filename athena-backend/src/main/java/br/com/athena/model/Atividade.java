package br.com.athena.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class Atividade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String titulo;

    private String descricao;

    @ManyToOne
    @JsonIgnoreProperties("atividade")
    private Aula aula;

    @Temporal(TemporalType.TIMESTAMP)
    @JsonProperty("data_de_publicacao")
    private Date dataDePublicacao = new java.sql.Date(System.currentTimeMillis());

    @JsonProperty("data_de_publicacao")
    private Date dataDeEntrega = new java.sql.Date(System.currentTimeMillis());

}
