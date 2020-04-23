import React, { Component } from 'react';

import builder from "../../../store/reducers/builder";
import { WHITE, BLACK } from "../../constants";

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
        // console.log("Player prevProps");
    }

    render() {
        const { player, color } = this.state;
        const { capturedPieces } = this.props;

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
                        const pecaCompleta = {
                            peca: piece,
                            cor: color == WHITE ? BLACK : WHITE,
                            linha: 0,
                            coluna: ""
                        }
                        return <div key={i}>{builder.buildPiece(pecaCompleta)}</div>
                    })}
                </div>
            </div>
        );
    }
}

export default Player;