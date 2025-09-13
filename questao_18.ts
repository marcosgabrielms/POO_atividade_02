let nome: string;
// Se a linha abaixo for removida, o erro aparece
nome = "Ely"; 
console.log("Nome:", nome);

//O typescript gera um erro ao tentar usar a váriável nome antes que um valor seja atribuido a ela.
// Ele entende que uma variável declarada sem valor é, inicialmente, undefined, e te impede de usá-la em um
// local que espera uma string