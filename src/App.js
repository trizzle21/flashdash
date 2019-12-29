import React from 'react';
import style from './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import Auth from './common/authentication/index';

import Sidebar from './components/sidebar/index';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Main from './components/main1/index';
import Main2 from './components/main2/index';
import LoginPage from './components/login/index';

const history = createBrowserHistory();


function App({ title, name }) {
  console.log(Auth);
  return Auth.isAuthenticated ? (
      <div className={ style['grid-container'] }>
          <Header title={ title } name={ name } />   
          <Router>
            <Switch>
              <Route exact path="/" component={ Main } />
              <Route exact path="/main-1" component={ Main } />
              <Route exact path="/main-2" component={ Main2 } />
            </Switch>
          <Sidebar />
        </Router>
        <Footer />
      </div>
  ): (
      <LoginPage />
  )
}

export default App;
