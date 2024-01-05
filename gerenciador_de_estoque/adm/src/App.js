import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Listar } from './pages/Listar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/listar" element={<Listar />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
