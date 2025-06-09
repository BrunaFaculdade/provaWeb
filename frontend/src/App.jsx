import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Usuarios from './pages/Usuarios';
import DadosUsuario from './pages/DadosUsuario';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/dados/:id" element={<DadosUsuario />} />
      </Routes>
    </Router>
  );
}
