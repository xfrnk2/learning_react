
import React, { useState, Fragment } from 'react';
import Axios from 'axios';



const Todo = ({ todo, todos, update, setTodos }) => {

    let [editMode, setEditMode] = useState(false);
    let [form, setForm] = useState({
        subject: todo.subject,
        content: todo.content,
        date: todo.date
    });

    const changeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const changeEditMode = () => {
        setEditMode(!editMode)
    }

    const submit = (event) => {
        update(event, form, todo, setEditMode);
    }


    const deleteTodo = (todos) => {
        
        

        Axios.delete('/todos/' + todo.id)
            .then((response) => {
                
                window.setMessage(`${form.subject}가 삭제 되었습니다.`);
    
                setTodos(todos.filter((targetTodo) => { return targetTodo.id !== todo.id }))

            })
            .catch((error) => {
                console.log(error)
            })


    }

    return (
        <div className="todoBox">
            {editMode
                ?
                <form onSubmit={(event) => { submit(event) }}>
                    <input type="text" name="subject" onChange={(e) => { changeForm(e) }} value={form.subject} placeholder={"할일 제목"}></input>
                    <input type="text" name="content" onChange={(e) => { changeForm(e) }} value={form.content} placeholder={"할일 내용"}></input>
                    <input type="text" name="date" onChange={(e) => { changeForm(e) }} value={form.date} placeholder={"완료 예정일"}></input>
                    <button type="submit">확인</button>
                    <button type="button" onClick={() => { changeEditMode() }}>취소</button>
                </form>
                :
                <div>
                    {todo.subject}  　 
                    {todo.date}
                    <text><br></br></text>
                    {todo.content}
                    <button onClick={() => { changeEditMode() }}>수정</button>
                    <button onClick={() => { deleteTodo(todos) }}>삭제</button>
                </div>
            }
        </div>
    )
}

export default Todo;