import { getLocalToken, getLocalUser } from '../../utils/auth';

const inititalState = {
    flash: null,
    loading: true,
    user: getLocalUser(),
    token: getLocalToken()
};

export default (state = inititalState, action) => {
    switch (action.type) {
        default:
            return state;

        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }

        case "SET_FLASH":
            return {
                ...state,
                flash: action.payload
            }

        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }

        case "SET_TOKEN":
            return {
                ...state,
                token: action.payload
            }
    }
};