import React from "react"
import style from './sidebar.scss';
import profile from '../../common/assets/images/profile.jpg' // relative path to image 
import { Link } from "react-router-dom";



function SidebarProfile(props) {
    return (
      <Link className={ style.sideprofile } to={props.link}>
        <img className={ style.sideprofile__image } src={ profile } />
        <div className={ style.sideprofile__name } > { props.name } </div>
      </Link>

    )
}

export default SidebarProfile;