import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/usuarios')
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>Usuários</Typography>
      <Grid container spacing={2}>
        {usuarios.map(usuario => (
          <Grid item xs={12} sm={6} md={4} key={usuario.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{usuario.nome}</Typography>
                <Typography variant="body2">{usuario.email}</Typography>
                <Button 
                  onClick={() => window.open(`/dados/${usuario.id}`, '_blank')} 
                  variant="outlined" 
                  sx={{ mt: 2 }}
                >
                  Ver detalhes
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
