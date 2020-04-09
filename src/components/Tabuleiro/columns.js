import { A, B, C, D, E, F, G, H } from "../../components/constants";

export const organizarPecas = (state) => {
    let allColumns = new Map();
    allColumns.set(A, state.colunaA);
    allColumns.set(B, state.colunaB);
    allColumns.set(C, state.colunaC);
    allColumns.set(D, state.colunaD);
    allColumns.set(E, state.colunaE);
    allColumns.set(F, state.colunaF);
    allColumns.set(G, state.colunaG);
    allColumns.set(H, state.colunaH);
    return allColumns;
}
