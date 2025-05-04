/* Caminho de login com Node.js e Express.js */

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

//Valor de teste
const usuario = {email: 'teste@email.com', senha: '12345'};

//Processo de método POST
app.post('/login', (req, res) => {
    const {email, senha} = req.body;

    if (email === usuario.email && senha === usuario.senha) {
        res.status(200).json({mensagem: 'Login bem-sucedido!'});
    } else {
        res.status(401).json({mensagem: 'Email ou senha incorretos.'});
    }
});

//Inicialização do servidor
app.listen(port, () => {
    console.log('servidor rodando');
});