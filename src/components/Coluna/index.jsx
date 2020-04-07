import React, { Component } from 'react';
import { connect } from 'react-redux';

class Coluna extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.tabuleiro);

   }

  render() {
    const { tipoDeColuna, pecas } = this.props;
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

const mapStateToProps = state => ({
  pecaSelecionada: state.selecionarPeca,
  tabuleiro: state.montarTabuleiro.tabuleiro
});

export default connect(mapStateToProps)(Coluna);