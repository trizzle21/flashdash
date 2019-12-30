import React from 'react';
import style from './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Sidebar from './components/sidebar/index';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Main from './components/main1/index';
import Main2 from './components/main2/index';


function App({ title, name }) {
  return (
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
  )
}

export default App;
