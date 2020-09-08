import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Food from './Food';

const Foods = ({ }) => {
    // 1. form창 만들기
    // 2. input에 입력 시 form state값 변경
    // 3. submit 시 생성 api 요청
    // 4. 응답값을 토대로 목록 업데이트

    let [foods, setFoods] = useState([]);
    let [form, setForm] = useState({
        title: "",
        reason: ""
    });
    
    useEffect(() => {
        axios.get("/foods")
            .then((response) => {
                setFoods(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);
 
    const changeForm = (content) => {
        setForm({
            ...form,
            [content.target.name]: content.target.value
        });        
    }
    const create = (event) => {
        event.preventDefault();
        
        axios.post("/foods", form)
            .then((response) => {
                console.log(response.data);
                setFoods([...foods, response.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    const update = (event, form, food, setEditMode) => {
        event.preventDefault();
        axios.patch('/foods/' + food.id, form)
            .then((response) => {
                setFoods(foods.map(foodData => {
                    if(foodData.id === response.data.id)
                        return response.data;
                        
                    return foodData;
                }));
                
                setEditMode(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // foods.filter(food => {
    //     return food.id !== deletedFood.id
    // })

    return (
        <Fragment>
            <div>
                <form onSubmit={(event)=>{create(event)}}>
                    <input type="text" name="title" onChange={(e) => {changeForm(e)}}/>
                    <input type="text" name="reason" onChange={(e) => {changeForm(e)}}/>

                    <button>submit</button>
                </form>
                
                {foods.map((food) => {
                    return <Food key={food.id} food={food} foods={foods} setFoods={setFoods} update ={update}></Food>;
                })}
            </div>
     
        </Fragment>

    );
}
export default Foods;