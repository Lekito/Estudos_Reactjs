import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Listar } from './pages/Listar';
import { Visualizar } from './pages/Visualizar';
import { Cadastrar } from './pages/Cadastrar';
import { Editar } from './pages/Editar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/listar" element={<Listar />} />
          <Route exact path="/visualizar/:id" element={<Visualizar />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/editar/:id" element={<Editar />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
