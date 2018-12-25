import React, { Component } from 'react';
import '../App/styles.css';

class Peao extends Component {
  constructor() {
    super();

    this.state = {
      cor: ""
    }
  }

  
  componentDidMount() {
    console.log('props: ');
    console.log(this.props);
    console.log(this.state);

    if (this.props.cor == 'branca') {
      this.setState({
        cor: 'branca'
      })
    } else {
      this.setState({
        cor: 'preta'
      })
    }
  }

  render() {
    const peao = "♟";
    const { cor } = this.state;
    
    return (
      <div className={cor}>
        <span>
          {peao}
        </span>
      </div>
    );
  }
}

export default Peao;