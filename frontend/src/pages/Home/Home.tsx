import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import "./home.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  PageContainer,
  BackGround,
} from "../../styles/DefaultStyles/DefaultStyles";
import {
  FormContainer,
  ImovelContainer,
  RowContainer,
  ImovelDescription,
  Title,
} from "./style";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import { DeleteForever } from "@material-ui/icons";

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

const useStyles = makeStyles((theme: any) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState<boolean[]>([]) ;

  async function loadData() {
    console.log("rodando load");
    const res = await api.get("/imoveis", {});
    console.log(res.data);
    if (res.data !== []) {
      setData(res.data.imoveis);
      setExpanded(res.data.imoveis.map(() => false))
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
    return (
      <Card key={i} style={{maxHeight:'fit-content !important'}}>
        <CardHeader
          title={imovel.tipoImovel}
          subheader={imovel.bairro}
          action={
            <IconButton
              onClick={async () => {
                const response = await api.delete(`/imoveis/${imovel.id}`);
                loadData();
              }}
            >
              <DeleteForever />
            </IconButton>
          }
        ></CardHeader>
        <CardContent>
            <Title>Descrição</Title> <RowContainer>{" " + imovel.descricao}</RowContainer>

          {imovel.valorCondominio ? (
            <RowContainer>
              <Title>Valor do condomínio: </Title>{" "}
              {"R$" + imovel.valorCondominio}{",00"}
            </RowContainer>
          ) : null}
          
        </CardContent>

        <CardActions>
        <Title style={{marginLeft:'8px'}}>R$ {imovel.aluguel},00</Title>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded[i],
            })}
            onClick={() => setExpanded(expanded.map((y : any,x:any) => x===i? !y : y))
            }
            aria-expanded={expanded[i]}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded[i]} timeout="auto" unmountOnExit>
          <CardContent>
            <RowContainer>
              <Title>Quartos: </Title> {" " + imovel.quartos}{" "}
            </RowContainer>
            <RowContainer>
              <Title>Suítes: </Title>
              {" " + imovel.suites}
            </RowContainer>
            <RowContainer>
              <Title>Salas de Estar: </Title> {" " + imovel.salasEstar}{" "}
            </RowContainer>
            <RowContainer>
              <Title>Salas de Jantar: </Title> {" " + imovel.salasJantar}{" "}
            </RowContainer>
            <RowContainer>
              <Title>Número de vagas: </Title> {" " + imovel.vagas}{" "}
            </RowContainer>
            {imovel.andar ? (
              <RowContainer>
                <Title>Andar: </Title> {" " + imovel.andar}
              </RowContainer>
            ) : null}
            <RowContainer>
              <Title>Área: </Title> {" " + imovel.area}{" "}
            </RowContainer>
            <RowContainer>
              <Title>Possui armarios: </Title>{" "}
              {" " + !!imovel.armario ? "Sim" : "Não"}{" "}
            </RowContainer>
            <RowContainer>
              <Title>Possui portaria 24h: </Title>{" "}
              {" " + !!imovel.portaria ? "Sim" : "Não"}{" "}
            </RowContainer>
          </CardContent>
        </Collapse>
      </Card>
    );
  }

  return (
    <PageContainer>
      <BackGround></BackGround>
      <FormContainer>
        {data.length > 0 ? (
          data.map((e, i) => renderImovel(e, i))
        ) : (
          <CircularProgress />
        )}
      </FormContainer>
    </PageContainer>
  );
};

export default Home;
