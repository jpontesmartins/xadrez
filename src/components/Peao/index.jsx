import React, { Component } from 'react';
import '../Tabuleiro/styles.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selecionarPeca } from '../../actions';

class Peao extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  getCasa() {
    if (this.props) {
      if (this.props.linha && this.props.coluna) {
        return `${this.props.coluna}${this.props.linha}`;
      }
    }
    return 'vazio';
  }

  componentDidMount() {
    this.corDaPeca();
  }

  corDaPeca() {
    if (this.props.cor == 'branca') {
      this.setState({
        cor: 'branca',
        casa: this.props.casa
      });
    }
    else {
      this.setState({
        cor: 'preta',
        casa: this.props.casa
      });
    }
  }

  handleClick() {
    this.props.selecionarPeca();

    console.log(this.props);
    console.log('----');

    const { cor, pecaSelecionada } = this.props;

    console.log('testando... 13-01');

    if (pecaSelecionada) {
      console.log('clique de movimentação');
    } else {
      console.log('clique de seleção de peça');
    }

    console.log(`peão da cor ${cor} na casa ${this.getCasa()}`);
  }

  handleSecondClick() {
    console.log('fazer a validação do segundo clique, o clique de escolha da casa de destino');

  }

  render() {
    const peao = "♟";
    const { cor } = this.props;

    return (
      <div className={cor} onClick={this.handleClick}>
        <span>
          {peao}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.selecionarPeca
});

const mapDispatchToProps = dispatch => bindActionCreators({ selecionarPeca }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Peao);