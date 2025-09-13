Para a questão 20, a depuração do projeto foi habilitada configurando o arquivo `tsconfig.json` com a opção `"sourceMap": true`.

Essa configuração faz com que o compilador gere arquivos `.js.map`, que funcionam como um mapa conectando o código JavaScript compilado de volta ao código TypeScript original.

O principal benefício é a depuração simplificada, permitindo ações como:
* Definir *breakpoints* e inspecionar variáveis diretamente nos arquivos `.ts`.
* Receber mensagens de erro no console que apontam para a linha exata no código-fonte, agilizando a correção de problemas.