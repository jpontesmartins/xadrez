import React, { Component } from 'react';

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
        const { capturedPieces } = this.props;

        console.log("this.props.capturedPieces");
        console.log(this.props.capturedPieces);

        return (
            <div style={status}>
                <div style={{ fontSize: "25px" }}>
                    {color}
                </div>
                <div style={{ fontSize: "25px" }}>
                    {player}
                </div>
                <div style={cemetery}>
                    {capturedPieces.map((piece, i) => {
                        //ver como eh o objeto "piece" e como ele eh tratado em "buildPiece"
                        console.log(piece);
                        return <div key={i}>{builder.buildPiece(piece)}</div>
                    })}
                </div>
            </div>
        );
    }
}

export default Player;