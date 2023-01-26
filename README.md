
<h1 align="center">DH MERCADO LIVRE BRASIL </h1>

## Prática integradora - CRUD 
### Objetivo 
<div>
No exercício anterior, praticamos como devemos preparar o sistema de roteamento de uma
aplicação para ser capaz de codificar um CRUD (Criar, Ler, Atualizar, Excluir) ou ABM
(Adicionar, Excluir, Modificar).
Neste exercício, trabalharemos com nossa fonte de dados JSON para fazer com que as
alterações sejam armazenadas usando cada uma das rotas que implementamos na aula
anterior. Além disso, estaremos trabalhando no upload de imagens dos produtos.
Boa sorte!
</div>

### Micro desafio - Passo 1 

- [X] Devemos codificar o formulário de upload do produto, que deve atualizar o arquivo JSON com os dados do novo produto inserido.
O referido formulário será acessado a partir da rota: / products / create e, uma vez processado
o referido formulário, devemos redirecionar para / products /, onde devemos mostrar todos os
produtos do nosso JSON. Lembre-se de que devemos incluir a possibilidade de enviar uma
imagem do produto.

<hr>

### Micro desafio - Passo 2 



- [X] Além da criação, devemos acrescentar à nossa aplicação a opção de editar um produto já
adicionado em nosso JSON. Para isso, devemos usar o seguinte caminho para enviar os
dados modificados para o servidor: /products/edit/:id
Lembre-se que, para acessar a opção de edição, tínhamos, na visualização de detalhes do
produto, o botão MODIFICAR.

<hr>

### Micro desafio - Passo 3


- [ ] A próxima etapa é poder remover um determinado produto de nosso JSON, para o qual
usaremos a rota / products /: id, onde id é o identificador que permite que um produto
específico seja reconhecido de forma única.
Lembre-se que, para acessar a opção de exclusão, temos o botão EXCLUIR, na visualização
de detalhes do produto.

<hr>


### Conclusão 

<div>
É importante entendermos que, dependendo da ação que precisamos realizar com o
servidor, muda o método HTTP que vamos usar.
</div>
Até a próxima!
 
