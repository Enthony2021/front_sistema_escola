import React, { useEffect, useState } from 'react';

// Para buscar um valor dentro um objeto ou setar um valor padrão se não encontrar
import { get } from 'lodash';

import { FaUserCircle } from 'react-icons/fa';

import AlunosStyled from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      console.log(alunos);
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos Page</h1>
      <AlunosStyled>
        {alunos &&
          alunos.map((aluno) => (
            <div key={String(aluno.id)}>
              <div className="profile-picture">
                {get(aluno, 'Fotos[0].url', false) ? (
                  <img src={aluno.Fotos[0].url} alt="foto do aluno" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </div>

              <span>{aluno.nome} {aluno.sobrenome}</span>
              <span>{aluno.email}</span>
            </div>
          ))}
      </AlunosStyled>
    </Container>
  );
};

export default Alunos;
