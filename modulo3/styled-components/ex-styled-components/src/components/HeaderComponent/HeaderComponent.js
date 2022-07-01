import React from "react";
import { HeaderContainer } from "../../style";
import Logo from "../../img/icon-whatsApp.png";

export default function HeaderComponent() {
  return (
    <HeaderContainer>
      <img src={Logo} width="50px" />
      <h1>LabeZap</h1>
    </HeaderContainer>
  );
}
