import React from 'react';
import TodoList from './TodoList';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../todoStore';
import Message from './Message';
import Fails from './Fails';


const TodoApp = () => {

  return (
    <Provider store={store}>
      <div>
        <Message></Message>
       
        <BrowserRouter>
          <Link to="/fails">실패목록</Link>
          <br/>
          <Link to="/todos">할일목록</Link>

          <Switch>
            <Route path="/fails" component={Fails}></Route>
            <Route path="/todos" component={TodoList}></Route>
          </Switch>
        </BrowserRouter>
  
      </div>
    </Provider>
  );


}
export default TodoApp;