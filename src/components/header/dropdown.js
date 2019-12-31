import React from "react"
import style from './header.scss';
import { Link } from "react-router-dom";



function Dropdown(props) {
    // props.activeDropdown
    const hidden = true ? style["header-dropdown active"] : style["header-dropdown"];
    return (
      <div className={ hidden }>
        <Link className={ style["header-dropdown__link"] } to={ props.link1 } >Link 1 </Link>
        <Link className={ style["header-dropdown__link"] } to={ props.link1 } >Link 1 </Link>
        <Link className={ style["header-dropdown__link"] } to={ props.link1 } >Link 1 </Link>
      </div>
    )
}

export default Dropdown;