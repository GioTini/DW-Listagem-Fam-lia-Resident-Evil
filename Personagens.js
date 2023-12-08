import React from 'react';

const Personagens = ({ familia }) => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];

  const filtrados = personagens.filter(personagem => personagem.includes(familia));

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {filtrados.map(personagem => (
          <li key={personagem}>{personagem}</li>
        ))}
      </ul>
    </div>
  )
}

export default Personagens;
