import * as types from "../actions/actionTypes";

export const initialState = {
    deck: [],
    history: [],
    gameIsStarted: false
}

const gameReducer = (state, action) => {
    switch (action.type) {
        case types.GAME_STARTED:
            return {
                ...state,
                gameIsStarted: true
            }
        case types.SET_DECK:
            return {
                ...state,
                deck: action.deck
            }
        case types.ADD_HISTORY:
            return {
                ...state,
                history: [...state.history, action.history]
            }
        case types.GAME_ENDED:
            return initialState;
        default:
            return state;
    }
};

export default gameReducer;