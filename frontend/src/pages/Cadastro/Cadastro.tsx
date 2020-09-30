import React, { useState } from "react";

import { PageContainer } from "../../styles/DefaultStyles/DefaultStyles";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { CheckBoxContainer, CustomText, FormContainer } from "./style";
import { Button, Checkbox, TextField } from "@material-ui/core";
import api from "../../Services/api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: 10,
      width: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const bairros = ["Gameleira", "Barreiro"];
const emptyForm = {
  quartos: 0,
  suites: 0,
  salasEstar: 0,
  salasJantar: 0,
  area: 0,
  vagas: 0,
  bairro: "",
  armario: false,
  andar: 0,
  valorCondominio: 0.0,
  portaria: false,
  descricao: "",
  aluguel: 0.0,
};


const Cadastro: React.FC = () => {
  const classes = useStyles();
  const [tipoImovel, setTipoImovel] = useState("");

  const [formInfo, setFormInfo] = useState(emptyForm);

  const [showOutros, setShowOutros] = useState(false);

  console.log(JSON.stringify(formInfo));
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTipoImovel(event.target.value as string);
  };

  const ApartamentoContent = (
    <FormContainer>
      <TextField
        id="outlined-basic 1"
        label="Número de quartos"
        variant="outlined"
        value={formInfo.quartos}
        onChange={({ target }) => {
          const { value } = target;
          setFormInfo((f) => ({ ...f, quartos: parseInt(value) }));
        }}
      />
      <TextField
        id="outlined-basic 2"
        label="Número de suítes"
        variant="outlined"
        value={formInfo.suites}
        onChange={({ target }) => {
          const { value } = target;
          setFormInfo((f) => ({ ...f, suites: parseInt(value) }));
        }}
      />
      <TextField
        id="outlined-basic 3"
        label="Número de salas de estar"
        variant="outlined"
        value={formInfo.salasEstar}
        onChange={({ target }) => {
          const { value } = target;
          setFormInfo((f) => ({
            ...f,
            salasEstar: parseInt(value),
          }));
        }}
      />
      <TextField
        id="outlined-basic 4"
        label="Número de salas de jantar"
        variant="outlined"
        value={formInfo.salasJantar}
        onChange={({ target }) => {
          const { value } = target;
          setFormInfo((f) => ({
            ...f,
            salasJantar: parseInt(value),
          }));
        }}
      />
      <TextField
        id="outlined-basic 5"
        label="Número de vagas"
        variant="outlined"
        value={formInfo.vagas}
        onChange={({ target }) => {
          const { value } = target;
          setFormInfo((f) => ({ ...f, vagas: parseInt(value) }));
        }}
      />
      <TextField
        id="outlined-basic 6"
        label="Área m²"
        variant="outlined"
        value={formInfo.area}
        onChange={({ target }) => {
          const { value } = target;
          setFormInfo((f) => ({ ...f, area: parseInt(value) }));
        }}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label 7">Bairro</InputLabel>
        <Select
          autoWidth={true}
          labelId="demo-simple-select-label 8"
          id="demo-simple-select 9"
          // value={formInfo.bairro}
          onChange={({ target }) => {
            const { value } = target;
            if (value === "Outro Bairro" && !showOutros) {
              setFormInfo((f) => ({ ...f, bairro: "" }));
              setShowOutros(true);
            } else if (value !== "Outro Bairro" && showOutros) {
              setShowOutros(false);
            } else {
              setFormInfo((f) => ({ ...f, bairro: String(value) }));
            }
          }}
        >
          {bairros.map((e, i) => (
            <MenuItem key={i} value={e}>
              {e}
            </MenuItem>
          ))}
          <MenuItem value="Outro Bairro">Outro Bairro</MenuItem>
        </Select>
        {showOutros && (
          <TextField
            id="outlined-basic 13"
            label="Digite o bairro"
            variant="outlined"
            style={{ marginTop: 10 }}
            value={formInfo.bairro}
            onChange={({ target }) => {
              const { value } = target;
              setFormInfo((f) => ({
                ...f,
                bairro: value,
              }));
            }}
          />
        )}
      </FormControl>

      <CheckBoxContainer>
        <CustomText>Possui armário</CustomText>
        <Checkbox
          checked={formInfo.armario}
          onChange={({ target }) => {
            const { checked } = target;
            setFormInfo((f) => ({ ...f, armario: checked }));
          }}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </CheckBoxContainer>
      {tipoImovel === "Apartamento" && (
        <>
          <TextField
            id="outlined-basic 10"
            label="Andar"
            variant="outlined"
            value={formInfo.andar}
            onChange={({ target }) => {
              const { value } = target;
              setFormInfo((f) => ({
                ...f,
                andar: parseInt(value),
              }));
            }}
          />
          <TextField
            id="outlined-basic 11"
            label="Valor do condomínio"
            variant="outlined"
            value={formInfo.valorCondominio}
            onChange={({ target }) => {
              const { value } = target;
              setFormInfo((f) => ({
                ...f,
                valorCondominio: parseFloat(value),
              }));
            }}
          />
          <CheckBoxContainer>
            <CustomText>Possui portaria 24h</CustomText>
            <Checkbox
              checked={formInfo.portaria}
              onChange={({ target }) => {
                const { checked } = target;
                setFormInfo((f) => ({ ...f, portaria: checked }));
              }}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </CheckBoxContainer>
        </>
      )}
      <TextField
        id="outlined-basic 12"
        label="Descrição"
        variant="outlined"
        value={formInfo.descricao}
        onChange={({ target }) => {
          const { value } = target;
          setFormInfo((f) => ({
            ...f,
            descricao: value,
          }));
        }}
      />
      <TextField
        id="outlined-basic 12"
        label="Valor do aluguel"
        variant="outlined"
        value={formInfo.aluguel}
        onChange={({ target }) => {
          const { value } = target;
          setFormInfo((f) => ({
            ...f,
            aluguel: parseFloat(value),
          }));
        }}
      />
      <Button
        style={{
          gridColumn: 3,
          width: "50%",
          margin: 'auto',
        }}
        variant="contained"
        color="primary"
        onClick={async () => {
          if(formInfo.aluguel !== 0) {
            // const response = await
            api.post('/imovel', formInfo); //Precisa de await

            setFormInfo(emptyForm); // Limpa formulário
            alert("Imóvel salvo");
          } else {
            alert("O campo valor é obrigatório");
          }
        }}
      >
        Salvar
      </Button>
      
    </FormContainer>
  );

  return (
    <PageContainer>
      <FormControl style={{margin: '50px 25vw'}} className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Tipo de imóvel</InputLabel>
        <Select
          autoWidth={true}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tipoImovel}
          onChange={handleChange}
        >
          <MenuItem value="Casa">Casa</MenuItem>
          <MenuItem value="Apartamento">Apartamento</MenuItem>
        </Select>
      </FormControl>

      {tipoImovel && ApartamentoContent}
    </PageContainer>
  );
};

export default Cadastro;
