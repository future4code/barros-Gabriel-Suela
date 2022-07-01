import React from "react";
import { createGlobalStyle } from "styled-components";
import Main from "./components/MainComponent/MainComponent";
import Header from "./components/HeaderComponent/HeaderComponent";
export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

`;

function App() {
  return (
    <div>
      <Header />

      <Main></Main>
    </div>
  );
}

export default App;
