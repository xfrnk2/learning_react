
export const setLoading = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET_LOADING",
            payload: data
        });
    }
};

export const setFlash = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET_FLASH",
            payload: data
        })
    }
}

export const login = (user, token, onLogin = () => {}) => {
    return (dispatch) => {
        dispatch({
            type: "SET_USER",
            payload: user
        });

        dispatch({
            type: "SET_TOKEN",
            payload: token
        });
        
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));

        onLogin();
    }
}

export const logout = (onLogout = () => {}) => {
    return (dispatch) => {
        dispatch({
            type: "SET_USER",
            payload: null
        });

        dispatch({
            type: "SET_TOKEN",
            payload: null
        });
        
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        onLogout();
    }
}