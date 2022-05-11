const express = require('express');
const app = express();
app.set('view engine', 'ejs')

app.get('/:nome/:lang', function (req, res) {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false
    res.render('index', {
        nome: nome,
        lang: lang,
        msg: exibirMsg,

    });
});

app.listen(80, () => {
    console.log("app rodando");
})