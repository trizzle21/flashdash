import React from "react"
import style from './sidebar.scss';
import SidebarLink from './sidebarlink';
import SidebarProfile from './sidebarprofile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTimes, 
  faCoffee, 
  faBath,
  faBell,
  faHome,
} from '@fortawesome/free-solid-svg-icons'

function Sidebar(props) {
  const sidenavClass = props.hidden ? style.sidenav : style.sidenav__active;
  console.log(sidenavClass)
  return (
    <aside className={ sidenavClass }>
      <div className={ style["sidenav__close-icon"] } onClick={ () => props.setHidden(true) }>
        <FontAwesomeIcon icon={faTimes} />
      </div>

      <SidebarProfile name="Test Name" link='/main-1'/>
      <ul className={ style.sidenav__list }>
        <SidebarLink icon={ faHome } title='Page One' link='/main-1' />
        <SidebarLink icon={ faCoffee } title='Page Two' link='/main-2' />
        <SidebarLink icon={ faBath } title='Page Three' link='/main-2' />
        <SidebarLink icon={ faBell } title='Page Four' link='/main-2' />
      </ul>   
    </aside>
  )
}

export default Sidebar;
