import React , { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import App from "./App.js";
import Users from './Users.js';
import UserApi from "./UserApi.js";
import specificUser from "./specificUser.js";

class Routes extends Component {


    render(){
      return(
        <div className="container">
             <BrowserRouter>
                <Switch>
                    <Route exact path="/"  component={UserApi}/>
                    <Route exact path="/:user" component={specificUser} />
                </Switch>
             </BrowserRouter>
        </div>
      )
    }
}

export default Routes;
// <Route exact path="/:user" render={() => <div>Home</div>} />
