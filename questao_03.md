Um exemplo clássico do problema da tipagem dinâmica ocorre em JavaScript ao tentar somar um número e uma string que representa um número.

**Código de Exemplo:**
```javascript
let a = 10;
let b = "5";
console.log(a + b);
``` 
**Em vez de realizar uma soma matemática e retornar 15, o JavaScript converte o número 10 para uma string e concatena os dois valores, resultando na string "105". **