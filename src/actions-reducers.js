import initialData from './base.json';
import { combineReducers } from 'redux';

const initialState = {
    activity: initialData.activity,
    name: initialData.name,
};

const NAP = "napping";
const EAT = "eating";
const PLAY = "playing";
const DROOL = 'drooling';


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

export function setActivityDrool() {
    return {
        type: ACTION_DROOL,
    }
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

const ACTION_SET_NAME = "name";
const ACTION_SET_ACTIVITY = "activity";
const ACTION_SET_BOTH = "both";

export function setName(name) {
    return {
        type: ACTION_SET_NAME,
        payload: {
            name,
        }
    };
}
export function setActivity(activity) {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: {
            activity,
        }
    };
}
export function setBoth(name, activity) {
    return {
        type: ACTION_SET_BOTH,
        payload: {
            activity,
            name,
        }
    };
}
function nameActivity(state = initialState, action = { type: "" }) {
    switch(action.type) {
        case ACTION_SET_NAME:
                return {
                    ...state,
                    name: action.payload.name,
                };
        case ACTION_SET_ACTIVITY:
                    return {
                        ...state,
                        activity: action.payload.activity,
                    };
        case ACTION_SET_BOTH:
                    return {
                        name: action.payload.name,
                        activity: action.payload.activity,
                    };
        default:
                    return state;
    }
}

export const rootReducer = nameActivity;