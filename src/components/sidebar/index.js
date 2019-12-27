import React from "react"
import style from './sidebar.scss';
import SidebarLink from './sidebarlink';

function Sidebar(props) {
  return (
    <aside className={ style.sidenav }>
      
      <ul className={ style.sidenav__list }>
        <SidebarLink title='Page One' link='/main-1' />
        <SidebarLink title='Page Two' link='/main-2' />
      </ul>   
    </aside>
  )
}

export default Sidebar;
