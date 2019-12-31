import React from "react"
import style from './header.scss';
import profile from '../../common/assets/images/profile.jpg' // relative path to image 
import { Link } from "react-router-dom";
import Dropdown from './dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'


function HeaderAvatar(props) {
    return (
      <div>
        <Link className={ style["header-avatar"] } to={ props.link }>
          <img className={ style["header-avatar__image"] } src={ profile } />
          <div className={ style["header-avatar__name"] }>{ props.name }</div>
        </Link>
      </div>
    )
}

export default HeaderAvatar;