import React from 'react';
import style from './app.scss';
import Sidebar from './sidebar/index';


function App({ title }) {
    return (
      <div class="grid-container">
        { title }
        <Sidebar />
        
        <span role="img" aria-label="rocket ship">
          🚀🚀
        </span>
        <div className={style.sassyDiv}>Get Sassy!</div>
      </div>
    );
}

export default App;
