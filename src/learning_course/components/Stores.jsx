import React from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../actions/commonActions';
import {connect} from 'react-redux';

const Stores = ({logout,  history }) => {

    const signOut = () => {
        logout(afterLogout);
    };

    const afterLogout = () => {
        history.push("/");
    }
   return (
       <div>
           stores

            <button onClick={signOut}>로그아웃</button>
       </div>
   );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (onLogout)=>{
            dispatch(logout(onLogout))
        }
    }
}
export default connect(null, mapDispatchToProps)(Stores);