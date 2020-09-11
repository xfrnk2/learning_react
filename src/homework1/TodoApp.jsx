import React from 'react';
import TodoList from './TodoList';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../todoStore';


const TodoApp = () => {

  return (
    <Provider store={store}>
      <div>
        <TodoList></TodoList>
      </div>
    </Provider>
  );


}
export default TodoApp;