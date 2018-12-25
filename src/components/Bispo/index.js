import React, { Component } from 'react';

class Bispo extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    const bispo = "♝";
    
    return (
      <div>
        <span>
          {bispo}
        </span>
      </div>
    );
  }
}

export default Bispo;