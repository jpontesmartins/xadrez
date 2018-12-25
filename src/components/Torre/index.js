import React, { Component } from 'react';
import '../App/styles.css';

class Torre extends Component {
  constructor(props) {
    super(props);

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
    const torre = "♜";
    const { cor } = this.state;

    console.log(cor);
    
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