import React, { Component } from 'react';

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

    componentDidUpdate(prevProps) {    }

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

        return (
            <div style={whoToPlay}>
                    Pretas jogam
                </div>
        );
    }
}

export default NextPlayer