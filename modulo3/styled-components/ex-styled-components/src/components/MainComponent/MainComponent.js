import React from "react";
import {
  BarComponent,
  FooterContainer,
  MainContainer,
  MainContent,
} from "../../style";
import Form from "../ChatComponent/ChatComponent";

export default function mainContent() {
  return (
    <div>
      <MainContainer>
        <BarComponent></BarComponent>
        <MainContent></MainContent>
        <BarComponent></BarComponent>
      </MainContainer>
      <Form></Form>
      <FooterContainer>
        Copyright 2022 Gabriel Suela All Rights Reserved
      </FooterContainer>
    </div>
  );
}
