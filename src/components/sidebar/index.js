import React from "react"
import style from './sidebar.scss';
import {
  BrowserRouter as Router,
  Link 
} from "react-router-dom";


function Sidebar(props) {
  return (
    <aside className={ style.sidenav }>
      <ul className={ style.sidenav__list }>
        <li className={ style['sidenav__list-item'] }>
          <Link className={ style["sidenav__link"]} to="/">Page One</Link>
        </li>
        <li className={ style['sidenav__list-item'] }>
          <Link className={ style["sidenav__link"]} to="/main2">Page Two</Link>
        </li>
      </ul>   
    </aside>
  )
}

export default Sidebar;
