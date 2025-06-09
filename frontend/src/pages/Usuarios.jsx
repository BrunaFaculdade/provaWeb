import { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/usuarios')
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>Lista de Usuários</Typography>
      <List>
        {usuarios.map(usuario => (
          <ListItem 
            button 
            key={usuario.id} 
            onClick={() => window.open(`/dados/${usuario.id}`, '_blank')}
          >
            <ListItemText 
              primary={usuario.nome} 
              secondary={usuario.email} 
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
