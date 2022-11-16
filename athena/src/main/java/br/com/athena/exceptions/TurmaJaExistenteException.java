package br.com.athena.exceptions;

public class TurmaJaExistenteException extends Exception{
    public String mensagem;
    public TurmaJaExistenteException(String mensagem){
        this.mensagem = mensagem;
    }
}
