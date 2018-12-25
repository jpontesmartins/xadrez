import React, { Component } from 'react';

class Torre extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    const torre = "♜";
    //&#9820;
    
    return (
      <div>
        <span>
          {torre}
        </span>
      </div>
    );
  }
}

export default Torre;