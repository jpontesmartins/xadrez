import React, { Component } from 'react';
import { connect } from 'react-redux';

import Player from "./Player"
import NextPlayer from './Player/NextPlayer';
import { BLACK, WHITE } from '../constants';

class Status extends Component {
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

        const { whiteCemetery, blackCemetery } = this.props.turn;

        return (
            <div style={statusPlayers}>
                <Player color={BLACK} player="Jogador B" capturedPieces={whiteCemetery} />
                <NextPlayer />
                <Player color={WHITE} player="Jogador A" capturedPieces={blackCemetery} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    turn: state.turn
});

export default connect(mapStateToProps)(Status);