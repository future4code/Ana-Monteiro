import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';


class App extends React.Component {

  state = {

    etapa: 1
    
  }

  onClickEtapaSeguinte = () => {
    this.setState({
      etapa: this.state.etapa +1
    })
  }

  renderizandoEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <Final/>
      default:
        return <div></div>
    }
  }


  render() {
    return (
    <div>
      {this.renderizandoEtapa()}
      <button onClick={this.onClickEtapaSeguinte}>Próxima Etapa</button>
    </div>
    )
   }
  }

   export default App;