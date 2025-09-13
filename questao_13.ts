class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
    aplicarDesconto(percentrual: number): number {
        const desconto = this.preco * (percentrual / 100);
        return this.preco - desconto;
    }
    emitirOrcamento(): string {
        const descontoPercentual = 10;
        const novoPreco = this.aplicarDesconto(descontoPercentual);

        const precoFormatado = this.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        const novoPrecoFormatado = novoPreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

        return `Produto ${this.nome}, Preço: ${precoFormatado}\nDesconto: ${descontoPercentual}% -> Novo Preço: ${novoPrecoFormatado}`;
    }
}

const produto1 = new Produto("Camisa", 100.00);
console.log(produto1.emitirOrcamento());