const inititalState = {
    flash: null,
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

        case "SET_FLASH":
            return {
                ...state,
                flash: action.payload
            }
    }
};