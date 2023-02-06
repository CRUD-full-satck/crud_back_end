# crud_back_end
Esse projeto é um crud simples de clientes, tais quais poderão cadastrar, atualizar, listar ou deletar os contatos desejados.

Para seu desenvolvimento, foi utilizado a linguagem `Typescript` com seu poderoso framework `Node.js com o Express`.

### Primeiramente...
1 - Copie a chave SSH clicando no botão "Code" logo acima.
2 - Após ter feito a copia da chave SSH, abra seu terminal e digite o comando: `git clone` (ainda não aperte enter), mais o clone da "chave SSH".

### Após clonar o repositório...
3 - No terminal bash do projeto, rode o comando `yarn`, para que assim possa ser instalada todas as dependências.
4 - Quando todas as dependencias estiverem instaladas, crie um arquivo `.env` na "raiz" do projeto.
5 - Faça um cópia de tudo oque estiver no arquivo `.env.example` e cole no arquivo `.env`. Não esqueca de preencher suas informações no arquivo `.env`.

### Depois de preencher o arquivo .env...
6 - Vá para o terminal bash do projeto e rode a seguinte cadeia de comandos: 
- primeiro - `yarn typeorm migration:create src/migrations/initialMigration`
- segundo - `yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts`
- terceiro - `yarn typeorm migration:run -d src/data-source.ts`
com esses três comandos será possivel criar as imagens das entidades do banco de dados, montar essa imagens e rodar.

### terminando de popular o banco de dados...
7 - Rode o comando `yarn dev`, que irá abrir o servidor local para se utilizar da api. 
