import React from "react"
import style from './sidebar.scss';


function Sidebar(props) {
  return (
    <aside className={ style.sidenav }>
      <ul className={ style.sidenav__list }>
        <li className={ style['sidenav__list-item'] }>Item One</li>
        <li className={ style['sidenav__list-item'] }>Item Two</li>
        <li className={ style['sidenav__list-item'] }>Item Three</li>
        <li className={ style['sidenav__list-item'] }>Item Four</li>
        <li className={ style['sidenav__list-item'] }>Item Five</li>
        <li className={ style['sidenav__list-item'] }>Item six</li>
      </ul>        
    </aside>
  )
}

export default Sidebar;
