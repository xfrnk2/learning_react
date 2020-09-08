import React, {useState} from 'react';


const Todo = ({todo}) => {
    return (
        <div>
        {todo.subject}  　 {todo.date}　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
        {/* {year}-{month}-{day}  {hours}:{minutes}:{seconds} */}
        <text><br></br></text>
         {todo.content} 
        </div>
    )
}

export default Todo;