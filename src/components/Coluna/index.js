import React, { Component } from 'react';

class Coluna extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tipoDeColuna: props.tipoDeColuna,
      pecas: props.pecas
    }

  }

  render() {
    const { tipoDeColuna, pecas } = this.state;

    return (
      <div className={tipoDeColuna}>
        {pecas.map((peca, i) => {
          if (peca.props.cor) {
            console.log(peca.props.cor);
          }
          return <div key={i} > {peca} </div>;
        })}
      </div>
    );
  }
}

export default Coluna;