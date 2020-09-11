const inititalState = {
    targetName: null,
    loading: true
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


    }
};