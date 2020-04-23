import React, { Component, Fragment } from 'react';
import Tabuleiro from '../Tabuleiro';
import Status from '../Status';

class App extends Component {
  constructor() {
    super();
  }

  render() {

    const table = { 
      backgroundColor: "#FFF",
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    };

    return (
      <Fragment>
        <div style={table}>
          <Tabuleiro />
          <Status />
        </div>
      </Fragment>
    );
  }
}

export default App;