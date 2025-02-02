import { combineReducers } from 'redux';
import { SET_NAME, SET_HOST, SET_LOBBY_ID , SET_LOBBY_OPTIONS, ADD_PLAYER, INIT_SOCKET } from "./actions";

const userReducer = (state={ name: "", isHost: false, lobbyId: "" }, action) => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload }
        case SET_HOST:
            return { ...state, isHost: action.payload }
        case SET_LOBBY_ID:
            return { ...state, lobbyId: action.payload }
        default:
            return state;
    }
}

const lobbyReducer = (state={ players:[], numOfQuestions: 5, categoryId: 8, difficulty: "", roundLimit: 60 }, action) => {
    switch (action.type) {
        case SET_LOBBY_OPTIONS:
            return action.payload;
        case ADD_PLAYER:
            return { ...state, players: [ ...state.players, action.payload ] }
        default:
            return state;
    }
}

const socketReducer = (state=null, action) => {
    switch (action.type) {
        case INIT_SOCKET:
            return action.payload
        default:
            return state;
    }
}

const combinedReducer = combineReducers({
    user: userReducer,
    lobby: lobbyReducer,
    socket: socketReducer
});

export default combinedReducer;