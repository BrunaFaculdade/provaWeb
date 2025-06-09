import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3005/usuarios') // ou http://localhost:3005 se você trocou a porta
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error(err));
  }, []);

  const handleClick = (id) => {
    navigate(`/dados/${id}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Usuários</Typography>
      <List>
        {usuarios.map((user) => (
          <ListItem button key={user.id} onClick={() => handleClick(user.id)}>
            <ListItemText primary={user.nome} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
