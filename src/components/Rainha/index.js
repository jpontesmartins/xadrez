import React, { Component } from 'react';

class Rainha extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    const rainha = "♛";
    
    return (
      <div>
        <span>
          {rainha}
        </span>
      </div>
    );
  }
}

export default Rainha;