import React from 'react';
import style from './app.scss';

import Sidebar from './sidebar/index';
import Header from './header/index';
import Footer from './footer/index';


function App({ title }) {
    return (
      <div className={style['grid-container']}>
        <Header title={title}/>
        <Sidebar />
        <Footer />
      </div>
    );
}

export default App;
