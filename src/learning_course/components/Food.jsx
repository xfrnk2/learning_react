import React, { useState, Fragment } from 'react';
import axios from 'axios';

const Food = ({ food, foods, update, setFoods }) => {
    let [editMode, setEditMode] = useState(false); // 편집모드인지
    let [form, setForm] = useState({
        title: food.title,
        reason: food.reason
    });
    

    const submit = (event) => {
        update(event, form, food, setEditMode)
    }

    const changeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const deleteFood = (foods) => {
        axios.delete('/foods/' + food.id)
            .then((response) => {
                setFoods(foods.filter((targetFood) => {
                    return targetFood.id !== food.id 
                }));
            })
            .catch((error) => {
                console.log.error()
            })

    }


    // 1. 입력값에 따라 form state 업데이트
    // 2. 엔터 또는 확인 버튼을 눌렀을 때 submit하기(console로 form 찍어보기)
    // 3. 실제 update api 요청 보내보기
    // 4. 실제 데이터 update해보기
    return (
        <div className="food">

            {editMode
                ? <form onSubmit={(event) => { submit(event) }}>
                    <input type="text" name="title" onChange={(e) => { changeForm(e) }} placeholder={"좋아하는 것 이름"} value={form.title}></input>
                    <input type="text" name="reason" onChange={(e) => { changeForm(e) }} placeholder={"좋아하는 이유"} value={form.reason}></input>

                    <button type="submit"> 확인</button>
                    <button type="button" onClick={() => { setEditMode(false) }}>닫기</button>
                </form>
                : <Fragment>
                    {food.title}
                    <br />{food.reason}
                    <button onClick={() => { setEditMode(true); }}>edit</button>
                    <button onClick={() => {deleteFood(foods)}}>remove</button>
                </Fragment>
            }
        </div>
    );
}
export default Food;