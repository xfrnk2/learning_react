import React, {Fragment, useState} from 'react';
import Todo from './Todo';

const TodoList = () => {
    
    let [currentStatus, setCurrentStatus] = useState("휴식");

    let works = [{subject: "빨래 널기", content: "빨래를 야무지게 널어야 구겨지지 않는다. 꼭 탈탈 털어서 털자."},
        {subject: "청소기 밀기", content: "로봇청소기 돌리자"}
        ];
   

    const changeStatus = () => {
        if (currentStatus === "휴식"){
            setCurrentStatus("열일")
        } else {
            setCurrentStatus("휴식")
        }
        } 


    return (
        <Fragment>
       <div>
        할 일 목록 <text><br></br></text>
        <button onClick={changeStatus}>{currentStatus}</button>
       </div>
       <div>
        {works.map((todo) => { return <Todo todo={todo}></Todo>})}
       </div>
       </Fragment>
   );
}

export default TodoList;