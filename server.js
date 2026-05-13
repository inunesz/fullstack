const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');


mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
.then(() => {
    console.log('MongoDB conectado');
})
.catch((err) => {
    console.log(err);
});


const Post = mongoose.model('Post', {

    titulo: String,
    resumo: String,
    conteudo: String

});


app.get('/', (req, res) => {
    res.redirect('/blog');
});


app.get('/blog', async (req, res) => {

    const posts = await Post.find();

    res.render('blog', {
        posts: posts
    });

});


app.post('/cadastra_post', async (req, res) => {

    const novoPost = new Post({

        titulo: req.body.titulo,
        resumo: req.body.resumo,
        conteudo: req.body.conteudo

    });

    await novoPost.save();

    res.redirect('/blog');

});


app.listen(80, () => {
    console.log('Servidor rodando na porta 80');
});