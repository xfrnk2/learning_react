import React, { Fragment, useState, useEffect } from 'react';
import Todo from './Todo';
import axios from 'axios';
import { connect } from 'react-redux';

const TodoList = () => {

    let [todos, setTodos] = useState([]);
    let [currentStatus, setCurrentStatus] = useState("휴식");
    let [message, setMessage] = useState({
        subject: "",
        status: ""
    });
    let [writingMode, setWritingMode] = useState(false);
    let [form, setForm] = useState({
        subject: "",
        content: "",
        date: ""
    });

    useEffect(() => {

        window.setLoading(true);

        axios.get("/todos")
            .then((response) => {
                setTimeout(() => {

                    window.setLoading(false);
                }, 2000);
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
        setWritingMode(!writingMode);
    }

    const create = (event) => {
        event.preventDefault();


        window.setLoading(true);

        axios.post("/todos", form)
            .then((response) => {

                setMessage({
                    subject: form.subject,
                    status: "생성"
                });
                window.setLoading(true);



                setTimeout(() => {

                    window.setLoading(false);

                }, 2000);



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

    const update = (event, form, todo, setEditMode) => {

        event.preventDefault();





        axios.patch('/todos/' + todo.id, form)
            .then((response) => {

                setMessage({
                    subject: form.subject,
                    status: "수정"
                });
                window.setLoading(true);


                setTimeout(() => {

                    window.setLoading(false);

                }, 2000);
                setTodos(todos.map(todoData => {
                    if (todoData.id === response.data.id)
                        return response.data;

                    return todoData;
                }));

                setEditMode(false);

            })
            .catch((error) => {
                console.log(error)
            });

    }



    return (
        <Fragment>
            <div>
                <div className="header">
                    할 일 목록 <text><br></br></text>
                </div>

                {window.getLoading() && message.status !== "" ?
                    '"' + message.subject + '"가 ' + message.status + " 되었습니다." : ""}
                <text><br></br></text>

                <button className="statusIcon" onClick={changeStatus}>{currentStatus}</button>
            </div>
            <button type="button" onClick={() => { changeWritingMode() }}> 할일 생성</button>
            <div>
                {writingMode
                    ?

                    <form onSubmit={(event) => { create(event) }}>
                        <input type="text" name="subject" onChange={(e) => { changeForm(e) }} placeholder={"할일"}></input>
                        <input type="text" name="content" onChange={(e) => { changeForm(e) }} placeholder={"할일 설명"}></input>
                        <input type="text" name="date" onChange={(e) => { changeForm(e) }} placeholder={"완료 예정일"}></input>
                        <button type="submit"> 확인</button>
                        <button onClick={(event) => changeWritingMode(event)}>취소</button>
                    </form>
                    :
                    null
                }

                {todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}
                        setMessage={setMessage} update={update}></Todo>;
                })}
            </div>

        </Fragment>
    );
}


const mapStateToProps = (state) => {
    return {
        loading: state.common.loading
    }
};
export default connect(mapStateToProps, null)(TodoList);
