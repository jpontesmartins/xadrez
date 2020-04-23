import React, { Component } from 'react';

import { connect } from 'react-redux'

class NextPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: this.props.color,
            player: this.props.player,
            capturedPieces: this.props.capturedPieces
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps) {
        console.log("NextPlayer prevProps");
     }

    render() {

        const whoToPlay = {
            fontSize: "45px",
            textAlign: "center",
            backgroundColor: "#222",
            color: "#CCC",
            margin: "5px",
            padding: "35px",
            boxShadow: "2px 2px 5px #000",
        }

        const { currentPlayer } = this.props;

        const brancasJogam = "brancas jogam!";
        const pretasJogam = "pretas jogam!";
        
        return (
            <div style={whoToPlay}>
                {currentPlayer == "white" ? brancasJogam : pretasJogam}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentPlayer: state.turn.currentPlayer
});

export default connect(mapStateToProps)(NextPlayer);

