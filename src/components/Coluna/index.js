import React, { Component } from 'react';
import Torre from '../Torre';
import Peao from '../Peao';

class Coluna extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colunaImpar: props.colunaImpar,
      pecas: props.pecas
    }

  }

  render() {
    const { colunaImpar, pecas } = this.state;

    return (
      <div className={colunaImpar}>
        {pecas.map((peca, i) => {
          return <div key={i} > {peca} </div>;
        })}
      </div>
    );
  }
}

export default Coluna;