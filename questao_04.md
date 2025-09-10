### **Questão 4: Atribuir `string` a uma variável `number`**
 Ao criar uma variável chamada `idade` do tipo `number` e tentar atribuir a ela um valor do tipo `string`, o compilador do TypeScript acusará um erro em tempo de compilação.
 Isso ocorre porque o TypeScript possui tipagem estática, que verifica os tipos das variáveis durante o desenvolvimento e impede a atribuição de um tipo incompatível a uma variável que já teve seu tipo declarado.

**Exemplo:**
```typescript
let idade: number;
idade = "Vinte"; // <- Ocorrerá um erro aqui.
```