import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Navigationbar = ({}) => {
    
   return (
       <div className="navigations">
           {window.getLoading() ? "로딩중" : "로딩 아닌데?"}
           <Link to="/foods">foods로 이동</Link>
           <Link to="/stores">stores로 이동</Link>
           <Link to="/menus">menus로 이동</Link>
       </div>
   );
}

export default Navigationbar;