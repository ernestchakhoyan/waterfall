import createDataContext from "./createDataContext";
import gameReducer, { initialState } from "../reducers/game";
import {
    addHistory,
    endGame,
    setDeck,
    startGame
} from "../actions/GameActions";

export const { Provider, Context } = createDataContext(
    gameReducer,
    {
        startGame,
        endGame,
        setDeck,
        addHistory
    },
    initialState
);