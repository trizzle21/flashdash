import React from "react"
import style from './sidebar.scss';
import {
  Link 
} from "react-router-dom";


function Sidebar(props) {
  return (
    <aside className={ style.sidenav }>
      
      <ul className={ style.sidenav__list }>
        <Link className={ style["sidenav__link"]} to="/main-1">
          <li className={ style['sidenav__list-item'] }>
            Page One
          </li>
        </Link>
        <Link className={ style["sidenav__link"]} to="/main-2">
          <li className={ style['sidenav__list-item'] }>
            Page Two
          </li>
        </Link>
      </ul>   
    </aside>
  )
}

export default Sidebar;
