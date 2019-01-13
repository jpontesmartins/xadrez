import React, { Component } from 'react';
import '../Tabuleiro/styles.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//action que será chamada ao eu clicar numa peca
import { selecionarPeca } from '../../actions';

class Peao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cor: "",
      casa: "",
      linha: this.props.linha,
      coluna: this.props.coluna,
      pecaSelecionada: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  getCasa() {
    if (this.state) {
      if (this.state.linha && this.state.coluna) {
        return `${this.state.coluna}${this.state.linha}`;
      }
    }
    return 'vazio';

  }

  componentDidMount() {
    if (this.props.cor == 'branca') {
      this.setState({
        cor: 'branca',
        casa: this.props.casa
      })
    } else {
      this.setState({
        cor: 'preta',
        casa: this.props.casa
      })
    }
  }

  handleClick() {
    const { cor, pecaSelecionada } = this.state;

    console.log('testando... 13-01');

    if (pecaSelecionada) {
      console.log('clique de movimentação');
      this.setState({
        pecaSelecionada: false
      })
    } else {
      console.log('clique de seleção de peça');
      this.setState({
        pecaSelecionada: true
      })
    }


    console.log(`peão da cor ${cor} na casa ${this.getCasa()}`);
  }

  handleSecondClick() {
    console.log('fazer a validação do segundo clique, o clique de escolha da casa de destino');

  }

  render() {
    const peao = "♟";
    const { cor } = this.state;

    return (
      <div className={cor} onClick={this.props.selecionarPeca}>
        <span>
          {peao}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.selectPieceReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({selecionarPeca}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Peao);