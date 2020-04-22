import React, { Component } from 'react';

import { TORRE, PEAO } from "../../constants";
import builder from "../../../store/reducers/builder";

import { status, cemetery } from "./styles";
import Peca from '../../Peca';

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

    componentDidUpdate(prevProps) {    }

    render() {

        const { player, color, capturedPieces } = this.state;

        console.log("capturedPieces");
        console.log(capturedPieces);

        const aa = ['a','b']

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
                       return <div key={i}>{builder.buildPiece(piece)}</div>
                   })}
                </div>
            </div>
        );
    }
}

export default Player