import React, { Component } from 'react';

import builder from "../../store/reducers/builder";
import { TORRE, PEAO } from "../constants";
import Player from "./Player"


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

        const whoToPlay = {
            fontSize: "45px",
            textAlign: "center",
            backgroundColor: "#222",
            color: "#CCC",
            margin: "5px",
            padding: "35px",
            boxShadow: "2px 2px 5px #000",
        }

        return (
            <div style={statusPlayers}>
                <Player />
                <div style={whoToPlay}>
                    Pretas jogam
                </div>
                <Player />
            </div>
        );
    }
}

export default PlayersStatus