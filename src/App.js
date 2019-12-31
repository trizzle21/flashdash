import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import style from './app.scss';

import Sidebar from './components/sidebar/index';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Main from './components/main1/index';
import Main2 from './components/main2/index';


function App({ title, name }) {
  const [hidden, setHidden] = useState(true);


  return (
      <div className={ style['grid-container'] }>
          <Router>
            <Header title={ title } name={ name } hidden={ hidden } setHidden={ setHidden }/>   
            <Switch>
              <Route exact path="/" component={ Main } />
              <Route exact path="/main-1" component={ Main } />
              <Route exact path="/main-2" component={ Main2 } />
            </Switch>
          <Sidebar hidden={ hidden } setHidden={ setHidden }/>
        </Router>
        <Footer />
      </div>
  )
}

export default App;
