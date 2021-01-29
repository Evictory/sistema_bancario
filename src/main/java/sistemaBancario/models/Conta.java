package sistemaBancario.models;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import sistemaBancario.enums.Sigla;

@Entity
@Table(name = "tb_conta")
public class Conta {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String nome;
	
	@Column(nullable = false)
	private Sigla sigla;
		
	@Column(nullable = false)
	private Double saldo=0.0;
	
	@OneToOne
	@JoinColumn(referencedColumnName = "id")
	private Usuario titular;
	
	@Embedded
    private Registro data = new Registro();
	
	public Conta() {}
	public Conta(String nome, Sigla sigla,Usuario titular ) {
		this.nome = nome;
		this.sigla = sigla;
		this.titular = titular;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Sigla getSigla() {
		return sigla;
	}
	public void setSigla(Sigla sigla) {
		this.sigla = sigla;
	}
	public Double getSaldo() {
		return saldo;
	}
	public void setSaldo(Double saldo) {
		this.saldo = saldo;
	}
	public Long getId() {
		return id;
	}
	
	public Usuario getTitular() {
		return titular;
	}
	public void setTitular(Usuario usuario) {
		this.titular = usuario;
	}
	public Registro getData() {
		return data;
	}
	public void setData(Registro data) {
		this.data = data;
	}
}
