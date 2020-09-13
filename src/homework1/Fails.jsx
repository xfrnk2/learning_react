import React from 'react';

const Fails = ({}) => {
    const fail = () => {
        window.setMessage(`실패하였습니다.`);
    };

   return (
       <div>
        <button onClick={fail}>실패</button>
       </div>
   );
}

export default Fails;