import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Usuarios from './pages/Usuarios';
import DadosUsuario from './pages/DadosUsuario';
import Layout from './components/Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/dados/:id" element={<DadosUsuario />} />
        </Routes>
      </Layout>
    </Router>
  );
}
