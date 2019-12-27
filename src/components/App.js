import React from 'react';
import style from './app.scss';

import Sidebar from './sidebar/index';
import Header from './header/index';
import Footer from './footer/index';
import Main from './main1/index';


function App({ title, name }) {
    return (
      <div className={ style['grid-container'] }>
        <Header title={ title } name={ name } />
        <Main />
        <Sidebar />
        <Footer />
      </div>
    );
}

export default App;
