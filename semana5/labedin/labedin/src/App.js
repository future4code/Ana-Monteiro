import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardGrande/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/olar.jpg'
import foto1 from './img/doguinho.jpg'
import foto3 from './img/plantinha.jpg'
import foto4 from './img/job.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Ana Patrícia xD" 
          descricao="Olaaaar, eu sou a Ana Patrícia pode me chamar de Aninha, sou palhaça da alegria do Presente de Alegria como apelido de AniHAHA e sou igual ao Olaf amo abraços quentinhos XD"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={foto1}
          nome="Louca dos doguíneos" 
          descricao="Não posso ver um doguíneo que quero apertar, igual a felícia, só que abraços carinhosamente dados, logicamente xD!" 
        />
        
        <CardGrande 
          imagem={foto3}
          nome="Amo uma plantinha" 
          descricao="Se pudesse transformava a minha casa em uma floresta, amor especificamente por cactos : D puro amor !" 
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
         imagem={foto4}
         descricao="Anita quer job LABENU, me nota! =D"
         contato ="Meus contatos"
         email ="aninhaquerumjoblabenu@labenu.com.br"
         endereco ="Rua dos Desempregados, 30 -Bairro JOBNOW"
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
