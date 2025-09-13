class Numero {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    eh_par(): boolean {
        return this.valor % 2 === 0;
    }

    eh_impar(): boolean {
        return this.valor % 2 !== 0;
    }
}

const numero1 = new Numero(10);
const numero2 = new Numero(7);

console.log(`O número ${numero1.valor} é par? -> ${numero1.eh_par()}`);
console.log(`O número ${numero2.valor} é ímpar? -> ${numero2.eh_impar()}`);