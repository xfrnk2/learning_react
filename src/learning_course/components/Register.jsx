import React, {useState} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { login } from '../actions/commonActions';

const Register = ({ login, history }) => {
    let [form, setForm] = useState({})

    const changeForm = (event) => {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        });
    }

    const submit= (event) => {
        event.preventDefault();
        
        axios.post("/register", form)
        .then((response) => {
            login({email :form.email}, response.data.accessToken, () => {
                history.push("/");
            });
        })
        .catch((error) => {
            console.log(error)
        })

    }


    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name="email" onChange={changeForm} placeholder="이메일 아이디를 입력해 주세요"></input>
                <input type="password" name="password" onChange={changeForm} placeholder="패스워드 아이디를 입력해 주세요"></input>
                <button>회원가입</button>
            </form>
        </div>
    );
}
const mapDispatch = (dispatch) => {
    return {
        login: (user, token, onLogin) => {
            dispatch(login(user, token, onLogin))
        }
    }
}


export default connect(null, mapDispatch)(Register)