import React, { Component } from 'react';

import { connect } from 'react-redux'
import { WHITE, BLACK } from '../../constants';

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
        // console.log("NextPlayer prevProps");
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

        const whitesTurn = "white's turn!";
        const blacksTurn = "black's turn!";
        
        return (
            <div style={whoToPlay}>
                {currentPlayer == WHITE ? whitesTurn : blacksTurn}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentPlayer: state.turn.currentPlayer
});

export default connect(mapStateToProps)(NextPlayer);

