import React from "react"
import style from './sidebar.scss';
import SidebarLink from './sidebarlink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Sidebar(props) {
  return (
    <aside className={ style.sidenav }>
      <div className={ style["sidenav__close-icon"] }>
        <FontAwesomeIcon icon={faTimes} />
      </div>

      <ul className={ style.sidenav__list }>
        <SidebarLink title='Page One' link='/main-1' />
        <SidebarLink title='Page Two' link='/main-2' />
      </ul>   
    </aside>
  )
}

export default Sidebar;
