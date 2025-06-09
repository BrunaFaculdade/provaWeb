import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';

export default function Dados() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
  fetch(`http://localhost:3005/dados/${id}`)
    .then((res) => res.json())
    .then((data) => setUsuario(data))
    .catch((err) => console.error('Erro ao buscar detalhes:', err));
}, [id]);

  if (!usuario) return <Typography>Carregando...</Typography>;

  return (
    <Container>
      <Typography variant="h4">{usuario.nome}</Typography>
      <Typography>Email: {usuario.email}</Typography>
      <Typography>Idade: {usuario.idade}</Typography>
    </Container>
  );
}
