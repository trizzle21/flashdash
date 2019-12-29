import React from "react"
import style from './header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => (
  <header className={ style.header }>
      <div className={ style["menu-icon"] }>
        <FontAwesomeIcon icon={faBars} />
      </div>

    <div className={ style["header-title"] }>{ props.title }</div>
    <div className={ style["header-avatar"] }>{ props.name }</div>
  </header>
)

export default Header;
