import initialData from './base.json';
import { combineReducers } from 'redux';

const initialState = initialData;

const NAP = "napping";
const EAT = "eating";
const PLAY = "playing";
const DROOL = 'drooling';
const NAME = initialState.name;
console.log(NAME);

const ACTION_NAP = NAP;
const ACTION_EAT = EAT;
const ACTION_PLAY = PLAY;
const ACTION_DROOL = DROOL;

export function setActivityEat() {
    return {
        type: ACTION_EAT,
    };
}

export function setActivityNap() {
    return {
        type: ACTION_NAP,
    };
}

export function setActivityPlay() {
    return {
        type: ACTION_PLAY,
    };

}

function activity(state=initialState.activity, action = { type: "" }) {
    switch(action.type) {
        case ACTION_NAP:
                return NAP;
        case ACTION_EAT:
                return EAT;
        case ACTION_PLAY:
                return PLAY;
        case ACTION_DROOL:
                return DROOL;
        default:
                return state;
    }
}



export const rootReducer = combineReducers({
    activity: activity,
})