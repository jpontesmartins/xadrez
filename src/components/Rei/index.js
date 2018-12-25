import React, { Component } from 'react';

class Rei extends Component {
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
    const rei = "♚";
    const { cor } = this.state;

    return (
      <div className={cor}>
        <span>
          {rei}
        </span>
      </div>
    );
  }
}

export default Rei;