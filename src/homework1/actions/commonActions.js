
export const setLoading = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET_LOADING",
            payload: data
        });
    }
};

export const setMessage = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET_MESSAGE",
            payload: data
        });
    }
}

