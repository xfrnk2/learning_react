import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const AuthRoute = ({user, ...rest}) => {
   return <Redirect to={"/login"}></Redirect>
}

const mapState = (state) => {
    return {
        user: state.common.user
    }
}

export default connect(mapState, null)(AuthRoute);