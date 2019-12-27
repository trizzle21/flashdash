import React from 'react';
import style from './app.scss';
import {
  StaticRouter as Router,
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
                <Route exact={true} path="/">
                  <Main />
                </Route>
                <Route exact={true} path="/main2">
                  <Main2 />
                </Route>          
            </Switch>
            <Sidebar />
            </Router>
          <Footer />

        </div>
    );
}

export default App;
