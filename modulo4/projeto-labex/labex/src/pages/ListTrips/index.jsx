import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hook/useRequestData";
import { BASE_URL } from "../../components/constants/constants";
import * as C from "./style";
import { goToSubscribe, lastPage } from "../../routes/Coordinator";
import { MenuMobile } from "../../components/MenuMobile";
import { Header } from "../../components/Header";

function ListTrips() {
  const [data, loading, error] = useRequestData(`${BASE_URL}gabriel/trips`);
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setMenuIsVisible(false);
  }, []);

  const tripsList =
    data &&
    data.map((item) => (
      <div key={item.id}>
        <C.Card>
          <p>Nome: {item.name}</p>
          <p>Data: {item.date}</p>
          <p>Descrição: {item.description}</p>
          <p>Planeta: {item.planet}</p>
          <p>Duração: {item.durationInDays} dias</p>
          <button onClick={() => goToSubscribe(navigate)}>Aplicar</button>
        </C.Card>
      </div>
    ));

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

      <C.Container>
        <h1>Lista de Viagens</h1>

        <C.Trips>
          {loading && <span>Carregando...</span>}
          {!loading && error && <span>Ocorreu um erro</span>}
          {tripsList}
          <button onClick={() => lastPage(navigate)}>Voltar</button>
        </C.Trips>
      </C.Container>
    </>
  );
}

export default ListTrips;
