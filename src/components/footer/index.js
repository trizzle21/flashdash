import React from "react"
import style from './footer.scss';


function Footer(props) {
    return (
        <footer class={ style.footer }>
            <div class={ style["footer-copyright"] } >2019 </div>
            <div class={ style["footer-signature"] }>Made with love</div>
        </footer>
    );
}
        
export default Footer;
