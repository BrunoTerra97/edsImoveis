import React, { useState } from 'react';

const Cadastro: React.FC = () => {
  const [state, setState] = useState<string>('');
  return (
    <input
      value={state}
      onChange={(value) => setState(value.target.value)}
    />
  );
};

export default Cadastro;
// quantidade de quartos, quantidade de suítes, quantidade de salas de estar, número de
// vagas na garagem, área (em metros quadrados), se possui armário embutido e descrição
// (algum detalhe a mais que se deseja informar sobre a casa).
