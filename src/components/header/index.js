import React from "react"
import style from './header.scss';
import HeaderAvatar from './avatar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => (
  <header className={ style.header }>
      <div className={ style["menu-icon"] } onClick={ () => props.setHidden(false) }>
        <FontAwesomeIcon icon={faBars} />
      </div>

    <div className={ style["header-title"] }>{ props.title }</div>
    <HeaderAvatar name={ props.name } link='main-1' />
  </header>
)

export default Header;
