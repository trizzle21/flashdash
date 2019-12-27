import React from "react"
import style from './footer.scss';


function Footer(props) {
    return (
        <footer className={ style.footer }>
            <div className={ style["footer-copyright"] } >2019 </div>
            <div className={ style["footer-signature"] }>Made with love</div>
        </footer>
    );
}
        
export default Footer;
