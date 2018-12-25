import React, { Component } from 'react';
import '../App/styles.css';

class Peao extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    const peao = "♟";
    
    return (
      <div className="container-col-white">
        <span>
          {peao}
        </span>
      </div>
    );
  }
}

export default Peao;