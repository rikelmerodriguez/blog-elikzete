const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rota para receber os dados do cadastro
app.post('/register', (req, res) => {
    const userData = req.body;
    console.log('Dados recebidos:', userData);
    // Aqui você pode salvar os dados no banco de dados ou realizar outras operações necessárias
    res.status(200).json({ message: 'Cadastro realizado com sucesso!' });
});

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
