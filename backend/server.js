const express = require('express');
const cors = require('cors');
const app = express();
const usuarios = require('./mock/usuarios.json');

app.use(cors());

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/dados/:id', (req, res) => {
  const { id } = req.params;
  const usuario = usuarios.find((u) => u.id === parseInt(id));
  
  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  res.json(usuario);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});