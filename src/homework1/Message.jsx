import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Message = ({ message }) => {
    let timer = useState(null);
    useEffect(() => {
        timer = setTimeout(() => {
            window.setMessage(null);
        }, 3000);

        return  () => clearTimeout(timer);
        // if (!timer){
        //     timer = setTimeout(() => {
        //         setMessage(null);
        //     }, 3000);    
        // }
        // else{
        //     timer = null
        //     timer = setTimeout(() => {
        //         setMessage(null);
        //     }, 3000);   
        // }

    }, [message]);

    return (
        message ? (<div className="message">{message}</div>) : null
    );
}

const mapStateToProps = (state) => {
    return {
        message: state.common.message
    }

}

export default connect(mapStateToProps, null)(Message);