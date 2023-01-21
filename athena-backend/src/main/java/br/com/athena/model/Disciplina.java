package br.com.athena.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class Disciplina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nome;

    @JsonProperty("imagem")
    private String linkImagem;

    @ManyToOne
    @JsonIgnoreProperties("disciplina")
    private Professor professor;

    @OneToMany(mappedBy = "disciplina", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("disciplina")
    private List<Aula> aulas;

    @OneToMany(mappedBy = "disciplina", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("disciplina")
    private List<Aviso> avisos;
}
