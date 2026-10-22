import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function HealthCheck() {
  const [status, setStatus] = useState<string>('Verificando conexão com a API...');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Testa o proxy /api redirecionando para http://localhost:5080/api/health
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((data) => {
        setStatus(`Conectado à API .NET com sucesso! Resposta: ${data}`);
        setError(false);
      })
      .catch((err) => {
        setStatus(`Não foi possível conectar ao endpoint /api/health: ${err.message}`);
        setError(true);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-primary h4 mb-3">
            <i className="bi bi-cpu me-2"></i>UniColab - Setup Inicial
          </h2>
          <p className="card-text">
            Frontend inicializado com <strong>React</strong>, <strong>Vite</strong>, <strong>Bootstrap</strong> e <strong>React Router</strong>.
          </p>
          <div className={`alert ${error ? 'alert-warning' : 'alert-success'}`} role="alert">
            <i className={`bi ${error ? 'bi-exclamation-triangle' : 'bi-check-circle'} me-2`}></i>
            {status}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">UniColab</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HealthCheck />} />
      </Routes>
    </main>
  );
}