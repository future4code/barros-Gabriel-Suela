import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import { goToAdmin, goToTrips } from "../../routes/Coordinator";
import * as C from "./style";

function HomePage() {
  const navigate = useNavigate();
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  useEffect(() => {
    setMenuIsVisible(false);
  }, []);

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <C.Container>
        <section>
          <h1>LabeX </h1>
          <img
            src="https://images.vexels.com/media/users/3/152536/isolated/preview/401b51c3a9098f12b566121c92009877-mars-planet-icon.png"
            width={100}
          />
        </section>
        <div>
          <button onClick={() => goToTrips(navigate)}>Ver Viagens</button>
          <button onClick={() => goToAdmin(navigate)}>Área de Admin</button>
        </div>
      </C.Container>
    </>
  );
}

export default HomePage;
