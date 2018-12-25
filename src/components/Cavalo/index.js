import React, { Component } from 'react';

class Torre extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    const cavalo = "♞";
    
    return (
      <div>
        <span>
          {cavalo}
        </span>
      </div>
    );
  }
}

export default Torre;