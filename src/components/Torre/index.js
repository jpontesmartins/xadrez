import React, { Component } from 'react';
import '../Tabuleiro/styles.css';

class Torre extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cor: ""
    }

  }

  componentDidMount() {
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
    const torre = "♜";
    
    const { cor } = this.state;
    return (
      <div>
        <span className={cor}>
          {torre}
        </span>
      </div>
    );
  }
}

export default Torre;