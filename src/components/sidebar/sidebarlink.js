import React from "react"
import style from './sidebar.scss';
import {
    Link 
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SidebarLink(props) {
    return (
      <Link className={ style["sidenav__link"]} to={props.link}>
        <li className={ style['sidenav__list-item'] }>
          <FontAwesomeIcon icon={props.icon} />
          <div className={ style['sidenav__list-text'] }>
            { props.title }
          </div>
        </li>
      </Link>
    )
}

export default SidebarLink;