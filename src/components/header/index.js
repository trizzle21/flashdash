import React from "react"
import style from './header.scss';


const Header = (props) => (
  <header class={style.header}>
    <div class={style["header-search"]}>{props.title}</div>
    <div class={style["header-avatar"]}>Your face</div>
  </header>
)

export default Header;
