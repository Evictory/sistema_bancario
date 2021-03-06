package sistemaBancario.models;

import java.time.LocalDate;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tb_lancamento")
public class Lancamento {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	private LocalDate dataLancamento;
	
	@OneToOne
	@JoinColumn(referencedColumnName = "id")
	private Conta contaOrigem;
	
	@OneToOne
	@JoinColumn(referencedColumnName = "id",nullable = true)
	private Conta contaDestino;
	
	@OneToOne
	@JoinColumn(referencedColumnName = "id",nullable = true)
	private PlanoConta planoConta;
	
	@NotNull
	private Double valor;
	
	@Embedded
    private Registro data = new Registro();
	
	public Lancamento() {}
	public Lancamento(Conta origem, Double valor, Conta destino, 
					  PlanoConta planoConta, String descricao) {
		this.dataLancamento = LocalDate.now();
		this.contaOrigem = origem;
		this.contaDestino = destino;
		this.planoConta = planoConta;
		this.descricao = descricao;
	}
	
	private String descricao;

	public Long getId() {
		return id;
	}	

	public LocalDate getDataLancamento() {
		return dataLancamento;
	}

	public void setDataLancamento(LocalDate dataLancamento) {
		this.dataLancamento = dataLancamento;
	}

	public Conta getContaOrigem() {
		return contaOrigem;
	}

	public void setContaOrigem(Conta contaOrigem) {
		this.contaOrigem = contaOrigem;
	}

	public Conta getContaDestino() {
		return contaDestino;
	}

	public void setContaDestino(Conta contaDestino) {
		this.contaDestino = contaDestino;
	}

	public PlanoConta getPlanoConta() {
		return planoConta;
	}

	public void setPlanoConta(PlanoConta planoConta) {
		this.planoConta = planoConta;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public Registro getData() {
		return data;
	}
	public void setData(Registro data) {
		this.data = data;
	}

}
