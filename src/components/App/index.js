import React, { Component } from 'react';
import './styles.css';
import Torre from '../Torre';
import Cavalo from '../Cavalo';
import Bispo from '../Bispo';
import Rainha from '../Rainha';
import Rei from '../Rei';
import Peao from '../Peao';

class App extends Component {
  constructor() {
    super();

    this.state = {
      colunaImpar: "container-chess-white",
      colunaPar: "container-chess-black"
    }
  }

  render() {
    
    const { colunaImpar, colunaPar } = this.state;

    return (
      <div> xadrez da ovelha estoica :)
        <div className="container">

          {/* coluna A */}
          <div className={colunaImpar}>
            <Torre cor="preta" />
            <Torre cor="branca" />
            
            <Peao/>
            {/* <div></div> */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* coluna B */}
          <div className={colunaPar}>
            <Cavalo />
            <Peao />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* coluna C */}
          <div className={colunaImpar}>
            <Bispo />
            <Peao />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* coluna D */}
          <div  className={colunaPar}>
            <Rainha />
            <Peao />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* coluna E */}
          <div className={colunaImpar}>
            <Rei />
            <Peao />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>


          {/* coluna F */}
          <div className={colunaPar}>
            <Bispo />
            <Peao />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div></div>

          {/* coluna G */}
          <div className={colunaImpar}>
            <Cavalo />
            <Peao />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Peao />
            <Cavalo />
          </div>


          {/* coluna H */}
          <div  className={colunaPar}>
            <Torre />
            <Peao />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Peao />
            <Torre />
          </div>
        </div>

      </div>
    );
  }
}

export default App;