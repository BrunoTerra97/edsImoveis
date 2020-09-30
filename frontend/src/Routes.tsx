import React from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Header from "./Components/Header/Header";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Header
      buttons={[
        { title: "Imóveis", link: "/" },
        { title: "Cadastrar Imóvel", link: "/cadastro" },
      ]}
    />
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" component={Home} />
      <Route exact path="/cadastro" component={Cadastro} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
