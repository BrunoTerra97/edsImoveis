import React, { useEffect, useState } from "react";
import api from "../../Services/api";

import { PageContainer } from "../../styles/DefaultStyles/DefaultStyles";
import { FormContainer, ImovelContainer, RowContainer, Title } from "./style";

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

  async function loadData() {
    console.log("rodando load");
    const res = await api.get("/imoveis", {});
    console.log(res.data);
    if (res.data !== []) {
      setData(res.data.imoveis);
    } else {
      alert("Houve um erro ao comunicar com o servidor");
    }
  }

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  function renderImovel(imovel: Imovel, i: number) {
    console.log(imovel);
    return <ImovelContainer key={i}>
      <button
        onClick={async () => {
          const response = await api.delete(`/imoveis/${imovel.id}`);
          loadData();
        }}
      >LIXO</button>
      <RowContainer><Title>Tipo de imovel:</Title> {' ' + imovel.tipoImovel}</RowContainer>
      <RowContainer><Title>Aluguel:</Title> {' ' + imovel.aluguel} </RowContainer>
      <RowContainer><Title>Andar:</Title> {' ' + imovel.andar} </RowContainer>
      <RowContainer><Title>Área:</Title> {' ' + imovel.area} </RowContainer>
      <RowContainer><Title>Possui armarios:</Title> {' ' + !!imovel.armario ? "Sim": "Não"} </RowContainer>
      <RowContainer><Title>Bairro:</Title> {' ' + imovel.bairro} </RowContainer>
      <RowContainer><Title>Descrição:</Title> {' ' + imovel.descricao} </RowContainer>
      <RowContainer><Title>Possui portaria 24h:</Title> {' ' + !!imovel.portaria ? "Sim": "Não"} </RowContainer>
      <RowContainer><Title>Quartos:</Title> {' ' + imovel.quartos} </RowContainer>
      <RowContainer><Title>Salas de Estrar:</Title> {' ' + imovel.salasEstar} </RowContainer>
      <RowContainer><Title>Salas de Jantar:</Title> {' ' + imovel.salasJantar} </RowContainer>
      <RowContainer><Title>Tipo de imovel:</Title> {' ' + imovel.suites} </RowContainer>
      <RowContainer><Title>Número de vagas:</Title> {' ' + imovel.vagas} </RowContainer>
      <RowContainer><Title>Valor do condomínio:</Title> {' ' + imovel.valorCondominio} </RowContainer>
    </ImovelContainer>
  }

  return (
    <PageContainer>
      <FormContainer>
        {data.length > 0 ? (
          data.map((e, i) => renderImovel(e, i))
        ) : (
          <div>CARREGANDO</div>
        )}
      </FormContainer>
    </PageContainer>
  );
};

export default Home;
