import React from 'react';
import ReactDOM from 'react-dom';
import App from './learning_course/App';
import TodoApp from './homework1/TodoApp';
// import store from './store';
import store from './todoStore';
// import { setLoading } from './learning_course/actions/commonActions';
import {setMessage} from './homework1/actions/commonActions';

window.setMessage = (data) => {store.dispatch(setMessage(data))}

ReactDOM.render(
   <React.StrictMode>
    {/* <App /> */}
 
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

