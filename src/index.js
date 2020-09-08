import React from 'react';
import ReactDOM from 'react-dom';
import App from './learning_course/App';
import TodoApp from './homework1/TodoApp';
import store from './store';
import { setLoading } from './learning_course/actions/commonActions';

window.store = store;

window.setLoading = (data) => {
  store.dispatch(setLoading(data));
};

window.getLoading = () => {
  return store.getState().common.loading;
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
 
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

