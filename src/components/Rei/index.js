import React, { Component } from 'react';

class Rei extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    const rei = "♚";
    
    return (
      <div>
        <span>
          {rei}
        </span>
      </div>
    );
  }
}

export default Rei;