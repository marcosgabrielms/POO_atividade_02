### **Questão 6: Tipagem Fraca em C**

A linguagem C é considerada de tipagem fraca, apesar de ter tipagem estática, porque permite conversões de tipo implícitas (coerção) que podem levar a resultados inesperados. Em uma linguagem de tipagem forte, operações entre tipos incompatíveis seriam estritamente proibidas sem uma conversão explícita (casting).

**Exemplo:**

Em C, é possível somar um inteiro com um caractere. O compilador não gera um erro; em vez disso, ele converte implicitamente o caractere para seu valor numérico correspondente na tabela ASCII e realiza a soma.

```c
int numero = 10;
char letra = 'A';         // O valor ASCII de 'A' é 65.
int resultado = numero + letra; // O resultado será 10 + 65 = 75.
```