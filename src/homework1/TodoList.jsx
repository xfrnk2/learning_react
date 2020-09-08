import React, { Fragment, useState, useEffect } from 'react';
import Todo from './Todo';
import axios from 'axios';
const TodoList = () => {

    let [todos, setTodos] = useState([]);
    let [currentStatus, setCurrentStatus] = useState("휴식");
    let [writingMode, setWritingMode] = useState(false);
    let [form, setForm] = useState({
        subject: "",
        content: "",
        date: ""
    });

    useEffect(() => {
        axios.get("/todos")
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const changeStatus = () => {
        if (currentStatus === "휴식") {
            setCurrentStatus("열일")
        } else {
            setCurrentStatus("휴식")
        }
    }
    const changeWritingMode = () => {
        if (writingMode === true) {
            setWritingMode(false);
        }
        else {
            setWritingMode(true);
        }
    }

    const create = (event) => {
        event.preventDefault();
        console.log(event)
        console.log(todos)
        console.log(form)
        axios.post("/todos", form)
            .then((response) => {
                console.log(response.data);
                setTodos([...todos, response.data]);
                changeWritingMode();
            })
            .catch((error) => {
                console.log(form)
                console.log(error.data)
                console.log(error);
            });
    }

    const changeForm = (data) => {
        setForm({
            ...form,
            [data.target.name]: data.target.value
        });

    }



    return (
        <Fragment>
            <div>
                할 일 목록 <text><br></br></text>
                <button onClick={changeStatus}>{currentStatus}</button>
            </div>
            <div>
                {todos.map((todo, index) => { return <Todo key={index} todo={todo}></Todo> })}
            </div>
            <button type="button" onClick={(event) => { changeWritingMode(event) }}> 할일 생성</button>
            <div>
                {writingMode
                    ?
                    <Fragment>
                        <div>
                            <form onSubmit={(event) => { create(event) }}>
                                <input type="text" name="subject" onChange={(e) => { changeForm(e) }} placeholder={"할일"}></input>
                                <input type="text" name="content" onChange={(e) => { changeForm(e) }} placeholder={"할일 설명"}></input>
                                <input type="text" name="date" onChange={(e) => { changeForm(e) }} placeholder={"완료 예정일"}></input>
                                <button type="submit"> 확인</button>
                                <button onClick={(event) => changeWritingMode(event)}>취소</button>
                            </form>

                        </div>
                    </Fragment>
                    :
                    null
                }
            </div>

        </Fragment>
    );
}

export default TodoList;