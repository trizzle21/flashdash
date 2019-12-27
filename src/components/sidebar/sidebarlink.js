import React from "react"
import style from './sidebar.scss';
import {
    Link 
  } from "react-router-dom";
  

function SidebarLink(props) {
    return (
      <Link className={ style["sidenav__link"]} to={props.link}>
        <li className={ style['sidenav__list-item'] }>
          { props.title }
        </li>
      </Link>
    )
}

export default SidebarLink;