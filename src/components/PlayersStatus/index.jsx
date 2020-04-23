import React, { Component } from 'react';

import { connect } from 'react-redux';

import Player from "./Player"
import NextPlayer from './Player/NextPlayer';

class PlayersStatus extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    componentDidMount() { }

    componentDidUpdate(prevProps) {
        // console.log("PlayersStatus prevProps");
        console.log(this.props);
    }

    render() {

        const statusPlayers = {
            display: "grid",
            gridTemplateRows: "4fr 3fr 4fr",
        }

        const { whiteCemetery, blackCemetery } = this.props.turn;

        return (
            <div style={statusPlayers}>
                <Player
                    color="black"
                    player="Jogador B"
                    capturedPieces={whiteCemetery}/>
                <NextPlayer />
                <Player
                    color="white"
                    player="Jogador A"
                    capturedPieces={blackCemetery}/>
                    
            </div>
        );
    }
}

const mapStateToProps = state => ({
    turn: state.turn
});

export default connect(mapStateToProps)(PlayersStatus);