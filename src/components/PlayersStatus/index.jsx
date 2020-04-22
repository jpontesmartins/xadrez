import React, { Component } from 'react';

import { TORRE, PEAO } from "../constants";
import Player from "./Player"
import NextPlayer from './Player/NextPlayer';


class PlayersStatus extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { }

    componentDidUpdate(prevProps) { }

    render() {

        const statusPlayers = {
            display: "grid",
            gridTemplateRows: "4fr 3fr 4fr",
        }

        const pecaCompleta = {
            peca: TORRE,
            cor: "branca",
            linha: 0,
        }
        const pecaCompleta2 = {
            peca: PEAO,
            cor: "preta",
            linha: 0,
        }

        return (
            <div style={statusPlayers}>
                <Player
                    color="black"
                    player="Jogador B"
                    capturedPieces={[pecaCompleta]} />
                <NextPlayer />
                <Player
                    color="white"
                    player="Jogador A"
                    capturedPieces={[pecaCompleta2]} />
            </div>
        );
    }
}

export default PlayersStatus