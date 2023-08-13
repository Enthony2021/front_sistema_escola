import React from 'react';
import { useDispatch } from 'react-redux';
import * as exampleActions from '../../store/modules/example/actions';

import LoginStyled from './styled';
import { Container } from '../../styles/GlobalStyles';

const Login = () => {

  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <LoginStyled>
        <h1>Login Page</h1>
        <button onClick={() => handleButton()}>CLique Aqui</button>
      </LoginStyled>
    </Container>
  );
};

export default Login;
