import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp2.licdn.com/dms/image/C5603AQGmbx0vRpZ15A/profile-displayphoto-shrink_800_800/0/1649811091380?e=1661385600&v=beta&t=UKtgMGYYaXLGZnQEfwfZCGSMdoWcfo7aAq7s4O_Dzhs" 
          nome="Gabriel Suela" 
          descricao="Oi, eu sou o Gabriel Suela. Sou estudante de desenvolvimento web fullstack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />

        <CardPequeno
        imagem1="https://img.icons8.com/fluency/344/email-open.png"
        imagem2="https://img.icons8.com/fluency/344/worldwide-location.png" 
        email="gabrielabenu@labenu.com"
        endereco="Rua Labenu"
        />
      </div>

  

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp2.licdn.com/dms/image/C4D0BAQF0Yads2pvgsA/company-logo_100_100/0/1565300558055?e=1663804800&v=beta&t=Y7ntCZLrDlsqnhIVbJ2mCcJKVkc2zkysvU20IQoVBN4" 
          nome="Incentive.me" 
          descricao="Operação e atendimento" 
        />
        
        <CardGrande 
          imagem="https://media-exp2.licdn.com/dms/image/C4E0BAQFCb4RaykqFWw/company-logo_100_100/0/1625152972369?e=1663804800&v=beta&t=QOrGlkDAjzfuaIBRQcLjbZtlSy2kP_w5t3uY6Q63_OY" 
          nome="Eleva" 
          descricao="Corretor de redação" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
