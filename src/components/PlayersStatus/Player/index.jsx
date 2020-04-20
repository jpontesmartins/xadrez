import React, { Component } from 'react';

import { TORRE, PEAO } from "../../constants";
import builder from "../../../store/reducers/builder";

class Player extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { }

    componentDidUpdate(prevProps) { }

    render() {

        const pecaCompleta = {
            peca: TORRE,
            cor: "preta",
            coluna: "A",
            linha: 2,
        }
        const peca = builder.buildPiece(pecaCompleta);

        const pecaCompleta2 = {
            peca: PEAO,
            cor: "preta",
            coluna: "A",
            linha: 3,
        }
        const peca2 = builder.buildPiece(pecaCompleta2);


        const cemetery = {
            fontSize: "50px",
            display: "flex",
            flexWrap: "wrap"
        };

        const status = {
            backgroundColor: "#CCC",
            margin: "5px",
            padding: "2px",
            boxShadow: "2px 2px 5px #000",
        }

        return (
            <div style={status}>
                <div style={{ fontSize: "25px" }}>
                    Brancas
                </div>
                <div style={{ fontSize: "25px" }}>
                    Nome do Jogador
                </div>
                <div style={cemetery}>
                    {peca}
                    {peca2}{peca}
                    {peca2}{peca}
                    {peca2}{peca}
                    {peca2}
                    {peca2}
                    {peca2}
                    {peca2}
                </div>
            </div>
        );
    }
}

export default Player