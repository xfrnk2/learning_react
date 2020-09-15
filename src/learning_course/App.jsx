import React from 'react';
import Navigationbar from './components/layouts/Navigationbar';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store';
import Register from './components/Register';
import Login from './components/Login';
import AuthRoute from './components/AuthRoute';
import Stores from './components/Stores';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <header className="header">header</header>
        
        <BrowserRouter>
          <Navigationbar></Navigationbar>

          <div className="contents">
              <Switch>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/login" component={Login}></Route>
                <AuthRoute exact path="/" component={Stores}></AuthRoute>
          
                {/* <Route exact path="/foods" component={Foods}></Route>
                <Route exact path="/stores" component={Stores}></Route>
                <Route exact path="/menus" component={Menus}></Route> */}
              </Switch>
          </div>
        </BrowserRouter>

        <footer className="footer">footer</footer>
      </Provider>
    </div>
  ); 
}

export default App;
