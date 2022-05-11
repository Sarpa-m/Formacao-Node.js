const express = require("express"); // Inporta o express
const app = express(); // Inicializa o express

app.get('/', function (req, res) {
    //REQ dados de requisição do usuario
    //RES dados de envio da aplicação para o usuario
    res.send('<h1>inicio</h1>')
})

app.get('/ola/:nome', function (req, res) {

    res.send(req.params.nome)
})

app.get('/ola2/:nome/:enpresa', function (req, res) {
    var nome = req.params.nome
    var enpresa = req.params.enpresa
    res.send("<h1> Oi! " + nome + " do " + enpresa + "</h1>")
})

app.get('/ola2/:nome/:enpresa/:nun?', function (req, res) {
    var nome = req.params.nome
    var enpresa = req.params.enpresa
    var nun = req.params.nun
    res.send("<h1> Oi! " + nome + " do " + enpresa + " ggg " + nun + "</h1>")
})

app.get('/SARPA', function (req, res) {

});



app.listen(80, function (error) {
    if (error) {
        console.log('ocorrel um erro!');
        console.error(error);
    } else {
        console.log('Servidor iniciado com sucesso"');
    }
})