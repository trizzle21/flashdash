import React from "react"
import style from './header.scss';


const Header = (props) => (
  <header className={style.header}>
    <div className={ style["header-search"] }>{ props.title }</div>
    <div className={ style["header-avatar"] }>{ props.name }</div>
  </header>
)

export default Header;
