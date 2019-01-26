import React, { Component } from 'react';
import { connect } from 'react-redux';

class Coluna extends Component {
  constructor() {
    super();
  }

  render() {
    const { tipoDeColuna, pecas } = this.props;
    console.log(pecas);

    if (pecas) {
      return (
        <div className={tipoDeColuna}>
          {pecas.map((peca, i) => {
            return <div key={i} > {peca} </div>;
          })}
        </div>
      );
    } else {
      return (<div> problemas ao montar o tabuleiro.. </div>)
    }
    
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Coluna);