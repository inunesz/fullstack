const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const User = require("../models/User");

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {

    const { nome, login, senha } = req.body;

    const senhaHash = await bcrypt.hash(senha, 10);

    await User.create({
        nome,
        login,
        senha: senhaHash
    });

    res.redirect("/login");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", async (req, res) => {

    const { login, senha } = req.body;

    const user = await User.findOne({ login });

    if (!user) {
        return res.send("Usuário não encontrado");
    }

    const senhaCorreta = await bcrypt.compare(senha, user.senha);

    if (!senhaCorreta) {
        return res.send("Senha incorreta");
    }

    req.session.user = user;

    res.redirect("/cars");
});

module.exports = router;