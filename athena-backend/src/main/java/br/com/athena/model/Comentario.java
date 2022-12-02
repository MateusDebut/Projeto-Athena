package br.com.athena.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
public class Comentario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String comentario;

    @Temporal(TemporalType.TIMESTAMP)
    private Date data = new java.sql.Date(System.currentTimeMillis());

    @ManyToOne
    @JsonIgnoreProperties("comentario")
    private Aula aula;

    @ManyToOne
    @JsonIgnoreProperties("comentario")
    private Aluno usuario;

    public Comentario() {
    }

    public Comentario(long id, String comentario, Date data) {
        this.id = id;
        this.comentario = comentario;
        this.data = data;
    }
}
