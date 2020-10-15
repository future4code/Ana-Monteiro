import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Imagem from './img/baixados.jpg'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Aninha'}
          fotoUsuario={'https://picsum.photos/id/237/20/20'}
          fotoPost={'https://picsum.photos/200/200?grayscale'}
        />

        <Post
          nomeUsuario={'Carlinha'}
          fotoUsuario={Imagem}
          fotoPost={'https://picsum.photos/id/100/50/50'}
        />

      </div>
    );
  }
}

export default App;
