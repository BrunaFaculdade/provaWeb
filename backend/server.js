const express = require('express');
const cors = require('cors');
const app = express();
const usuarios = require('./mock/usuarios.json');

app.use(cors());

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  const user = usuarios.find(u => u.id == req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});