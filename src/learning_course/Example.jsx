import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

const Example = ({ }) => {
    let [foods, setFoods] = useState([]);
    let [form, setForm] = useState({
        title: "",
        reason: ""
    });

    useEffect(() => {
        axios.get("/posts")
            .then((response) => {
                console.log(response);

                setFoods(response.data);
                
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);
 
    const changeForm = (content) => {
        setForm({...form,
            [content.target.name]: content.target.value
        });        
    }
    const showForm = (event) => {
        event.preventDefault();
        
        axios.post("/posts", form)
            .then((response) => {
                
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    

    return (
        <Fragment>
            <div>
                <form onSubmit={(event)=>{showForm(event)}}>
                    <input type="text" name="title" onChange={(e) => {changeForm(e)}}/>
                    <input type="text" name="reason" onChange={(e) => {changeForm(e)}}/>

                    <button>submit</button>
                </form>
                
                {foods.map((food) => { 
                    return <div className="food">{food.title}</div>
                })}
            </div>
     
        </Fragment>

    );
}
export default Example;