import React from 'react';
import Page404Styled from './styled';

import { Container } from '../../styles/GlobalStyles';

const Page404 = () => {
  return (
    <Container>
      <Page404Styled>
        <h1>Esta página não existe</h1>
      </Page404Styled>
    </Container>
  );
};

export default Page404;
