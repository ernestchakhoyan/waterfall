import * as types from "../actions/actionTypes";

export const startGame = (dispatch) => () => {
    dispatch({type: types.GAME_STARTED})
}

export const endGame = (dispatch) => () => {
    dispatch({type: types.GAME_ENDED})
}

export const setDeck = (dispatch) => (deck) => {
    dispatch({type: types.SET_DECK, deck})
}

export const addHistory = (dispatch) => (history) => {
    dispatch({type: types.ADD_HISTORY, history})
}