import React, { Component } from 'react';

import { connect } from 'react-redux';
import builder from "../../../store/reducers/builder";

import { status, cemetery } from "./styles";

class Player extends Component {
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
        console.log("Player prevProps");
    }

    render() {

        const { player, color } = this.state;
        const { whiteCemetery } = this.props.turn;

        console.log("Player whiteCemetery");
        console.log(whiteCemetery[0]);

        return (
            <div style={status}>
                <div style={{ fontSize: "25px" }}>
                    {color}
                </div>
                <div style={{ fontSize: "25px" }}>
                    {player}
                </div>
                <div style={cemetery}>
                    {whiteCemetery.map((piece, i) => {
                        return <div key={i}>{builder.buildPiece(piece)}</div>
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    turn: state.turn
});

export default connect(mapStateToProps)(Player);