import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

const Rotas = () => {
  const logged = false;

  return (
    <Routes>
      {/* Rotas abertas */}
      <Route path="/" element={<Alunos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Rotas fechadas */}
      {logged && (
        <>
          {/* Editar Aluno */}
          <Route path="/aluno/:id/edit" element={<Aluno />} />

          {/* Criar Aluno */}
          <Route path="/aluno/" element={<Aluno />} />

          {/* Editar Fotos */}
          <Route path="/fotos/:id" element={<Aluno />} />
        </>
      )}

      {/* Rotas não existentes */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Rotas;
