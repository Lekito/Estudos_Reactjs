# Sequencia para criar o projeto
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outra funcionalidades
### npm install express

Acessar o progeto no navegador
### http://localhost:8080

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente
Executar no prompt de comandos somente quando nunca utilizou o Nodemon
### npm install -g nodemon -> Executar no prompt de comandos somente quando nunca utilizou o Nodemon
### npm install --save-dev nodemon

Rodar o projeto com o Nodemon
### nodemon app.js

Atenção para rodar o nodemon no windows 11
### Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Um comando para alterar uma diretiva de execução pode ser bem-sucedido, mas ainda não alterar a diretiva de execução efetiva.

Remover a política de execução
### Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope CurrentUser
Para remover a diretiva de execução de um escopo específico, defina a diretiva de execução como Undefined.

Instalar o banco de dados MySQL

Verificar o banco de dados MySQL no pront de comando
### mysql -h localhost -u root -p

Instalar o Workbench para gerenciar o banco de dados de forma gráfica

Comandos básicos de MySQL
Criar a base de dados
### create database estoque character set utf8mb4 collate utf8mb4_unicode_ci;

Sequelize é uma biblioteca JavaScript que facilita o gerenciamento de uma banco de dados SQL
### npm install --save sequelize

Intalando banco de dados MySQL
### npm install --save mysql2

Permitir acesso api
### npm install --save cors