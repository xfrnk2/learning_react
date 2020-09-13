const inititalState = {
    targetName: null,
    loading: true,
    message : null
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

        case "SET_MESSAGE":
            return {
                ...state,
                message: action.payload
            }
    }
};