import React, { useEffect, useState } from "react";
import api from "../../Services/api";

import { PageContainer } from "../../styles/DefaultStyles/DefaultStyles";
import { FormContainer, ImovelContainer, Title } from "./style";

interface Imovel {
  aluguel: string;
  andar: string;
  area: string;
  armario: string;
  bairro: string;
  descricao: string;
  id: string;
  portaria: string;
  quartos: string;
  salasEstar: string;
  salasJantar: string;
  suites: string;
  tipoImovel: string;
  vagas: string;
  valorCondominio: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function loadData() {
      console.log("rodando load");
      const res = await api.get("/imoveis", {});
      console.log(res.data);
      if (res.data !== []) {
        setData(res.data.imoveis);
      } else {
        alert("Houve um erro ao comunicar com o servidor");
      }
    })();

    return () => {};
  }, []);
  // aluguel: "12345699"
  // andar: "0"
  // area: "0"
  // armario: "0"
  // bairro: "Teste Outro BAirro"
  // descricao: ""
  // id: "c554ff8ff8702b5a1d271e510c186a8dc6eda58faf9e8b45"
  // portaria: "0"
  // quartos: "0"
  // salasEstar: "0"
  // salasJantar: "0"
  // suites: "0"
  // tipoImovel: "Casa"
  // vagas: null
  // valorCondominio: "0"
  function renderImovel(imovel: Imovel) {
    console.log(imovel);
    return <ImovelContainer>
      <Title>Tipo de imovel: {imovel.tipoImovel}</Title>
    </ImovelContainer>
  }

  return (
    <PageContainer>
      <FormContainer>
        {data.length > 0 ? (
          data.map((e) => renderImovel(e))
        ) : (
          <div>CARREGANDO</div>
        )}
      </FormContainer>
    </PageContainer>
  );
};

export default Home;
