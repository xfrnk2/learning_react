import React from 'react';


const Todo = ({todo}) => {
    var year = (new Date()).getFullYear();
    var month =  ((new Date()).getMonth()+1).toString().length === 1 && "0"+((new Date()).getMonth()+1) || (new Date()).getMonth()+1;
    var day = ((new Date()).getDate()+1).toString().length === 1 && "0"+((new Date()).getDate()+1) || (new Date()).getDate()+1;
    var hours = ((new Date()).getHours()+1).toString().length === 1 && "0"+((new Date()).getHours()+1) ||  (new Date()).getHours()+1;
    var minutes = ((new Date()).getMinutes()+1).toString().length === 1 && "0"+((new Date()).getMinutes()+1) || (new Date()).getMinutes()+1;
    var seconds = ((new Date()).getSeconds()+1).toString().length === 1 && "0"+((new Date()).getSeconds()+1) || (new Date()).getSeconds()+1;
    
    return (
        <div>
        {todo.subject}  　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
        {year}-{month}-{day}  {hours}:{minutes}:{seconds}
        <text><br></br></text>
         {todo.content}
        </div>
    )
}

export default Todo;