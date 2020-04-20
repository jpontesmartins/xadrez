import React, { Component, Fragment } from 'react';
import Tabuleiro from '../Tabuleiro';
import PlayersStatus from '../PlayersStatus';

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
          <PlayersStatus />
        </div>
      </Fragment>
    );
  }
}

export default App;