package br.com.athena.exceptions;

public class TurmaInexistenteException extends Exception{
    public String mensagem;
    public TurmaInexistenteException(String mensagem){
        this.mensagem = mensagem;
    }
}
