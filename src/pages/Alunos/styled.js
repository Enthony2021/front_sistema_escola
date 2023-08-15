import styled from 'styled-components';

const AlunosStyled = styled.section`
  /* background-color: red; */
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;

    .profile-picture {
      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
    }
  }
`;

export default AlunosStyled;
