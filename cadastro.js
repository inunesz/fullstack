const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

let usuarioSalvo = {
    usuario: '',
    senha: ''
};

app.get('/', (req, res) => {
    res.redirect('/projects.html');
});

app.post('/cadastra', (req, res) => {

    usuarioSalvo.usuario = req.body.usuario;
    usuarioSalvo.senha = req.body.senha;

    res.send('Usuário cadastrado com sucesso!');
});

app.post('/login', (req, res) => {

    const usuario = req.body.usuario;
    const senha = req.body.senha;

    let status = '';

    if (
        usuario === usuarioSalvo.usuario &&
        senha === usuarioSalvo.senha
    ) {
        status = 'LOGIN REALIZADO COM SUCESSO';
    } else {
        status = 'USUÁRIO OU SENHA INCORRETOS';
    }

    res.render('resposta', {
        mensagem: status
    });
});

app.listen(80, () => {
    console.log('Servidor rodando na porta 80');
});