package br.com.athena.exceptions;

public class AlunoJaExistenteException extends Exception{
    public String mensagem;
    public AlunoJaExistenteException(String mensagem) {
        this.mensagem = mensagem;
    }
}
