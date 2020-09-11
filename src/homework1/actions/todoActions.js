
export const setLoading = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET_LOADING",
            payload: data
        });
    }
};

