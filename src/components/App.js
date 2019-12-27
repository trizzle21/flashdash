import React from 'react';
import style from './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



import Sidebar from './sidebar/index';
import Header from './header/index';
import Footer from './footer/index';
import Main from './main1/index';
import Main2 from './main2/index';


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
    );
}

export default App;
