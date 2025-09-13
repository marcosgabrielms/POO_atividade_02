class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// error TS5108: Option 'target=ES3' has been removed. Please remove it from your configuration.