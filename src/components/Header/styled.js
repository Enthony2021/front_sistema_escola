import styled from 'styled-components';
import * as colors from '../../config/colors';


const HeaderStyled = styled.nav`
    background: ${colors.primaryColor};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #fff;
      margin: 0 10px 0;
      font-weight: bold;
    }

    p {
      color: #fff;
    }
`;

export default HeaderStyled;