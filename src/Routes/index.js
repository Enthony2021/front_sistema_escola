import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';

// Pages
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

const Rotas = () => {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404 />} />

      {/* Este é um exemplo para rotas protegidas e que devem ser acessadas de o usuário estiver logado*/}
      {/*
        <Route path="/login">
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        </Route>
      */}
    </Routes>
  );
};

export default Rotas;
