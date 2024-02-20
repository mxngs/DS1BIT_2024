/************************************************************************************************************
 * Objetivo: Criação do Back-end inicial do projeto (alunos) 
 * Data: 25/01
 * Autor: Gabrielle Bueno Ribeiro
 * Versão: 1.0
 * 
************************************************************************************************************/
/*
   Para realizar o acesso a Banco de Dados, precisamos instalar algumas bibliotecas:

    - SEUQLIZE -> É uma biblioteca mais antiga
    - PRISMA ORM -> É a biblioteca mais atual
    - FASTFY ORM -> É a biblioteca mais atual
    
*/
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const { request } = require('http');

const app = express();

app.use((request,response,next) =>{
    response.header('Acess-Control-Allow-Origin','*');
    response.header('Acess-Control-Allow-Methods', 'GET');
    app.use(cors())
    
    next();
})

app.get('/v1/acmefilmes/listarfilmes', cors(), (request,response,next) => {
    let filme = require('./controller/funcao');
    let filmes = filme.listarfilmes();

        response.json(filmes);
        express.response.status(8080);
} )

app.get('/v1/filmesAcme/filme/:id', cors(), async function(request,response,next){


    let mostrarFilme = request.params.id
    let filme = require ('./controller/funcoes');
    let filmes1 = filme.filme(mostrarFilme);

        response.json(filmes1);
        response.status(200);
} )




app.listen('8080', function(){
    console.log("API funcionando");
})
