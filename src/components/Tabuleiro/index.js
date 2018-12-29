import React, { Component } from 'react';
import './styles.css';
import Torre from '../Torre';
import Cavalo from '../Cavalo';
import Bispo from '../Bispo';
import Rainha from '../Rainha';
import Rei from '../Rei';
import Peao from '../Peao';

class Tabuleiro extends Component {
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
            <Torre cor="preta"/>
            <Peao cor="preta" casa="A1"/>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Peao cor="branca" casa="A1" />
            <Torre cor="branca" />
          </div>

          {/* coluna B */}
          <div className={colunaPar}>
            <Cavalo cor="preta" />
            <Peao cor="preta" />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Peao cor="branca" casa="B1"/>
            <Cavalo cor="branca"/>
          </div>

          {/* coluna C */}
          <div className={colunaImpar}>
            <Bispo cor="preta" />
            <Peao cor="preta" />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Peao cor="branca"/>
            <Bispo cor="branca"/>
          </div>

          {/* coluna D */}
          <div className={colunaPar}>
            <Rainha cor="preta" />
            <Peao cor="preta" />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Peao cor="branca"/>
            <Rainha cor="branca"/>
          </div>

          {/* coluna E */}
          <div className={colunaImpar}>
            <Rei cor="preta" />
            <Peao cor="preta" />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Peao cor="branca"/>
            <Rei cor="branca"/>
          </div>


          {/* coluna F */}
          <div className={colunaPar}>
            <Bispo cor="preta" />
            <Peao cor="preta" />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Peao cor="branca"/>
            <Bispo cor="branca"/>
          </div>

          {/* coluna G */}
          <div className={colunaImpar}>
            <Cavalo cor="preta" />
            <Peao cor="preta" />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Peao cor="branca"/>
            <Cavalo cor="branca"/>
          </div>


          {/* coluna H */}
          <div className={colunaPar}>
            <Torre cor="preta" />
            <Peao cor="preta" />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <Peao cor="branca"/>
            <Torre cor="branca"/>
          </div>
        </div>

      </div>
    );
  }
}

export default Tabuleiro;