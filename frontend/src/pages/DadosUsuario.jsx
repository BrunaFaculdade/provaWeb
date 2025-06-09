import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

export default function DadosUsuario() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/usuarios/${id}`)
      .then(res => res.json())
      .then(data => setUsuario(data));
  }, [id]);

  if (!usuario) return <Typography>Carregando...</Typography>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{usuario.nome}</Typography>
        <Typography>Email: {usuario.email}</Typography>
        <Typography>Idade: {usuario.idade}</Typography>
      </CardContent>
    </Card>
  );
}
