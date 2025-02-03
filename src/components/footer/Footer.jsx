import "./style.css";
import { NavLink } from "react-router";

const Footer = () => {
    return(
        <footer className="enlace-contacta">
        <NavLink to="/contacta">Contacta</NavLink>  
        </footer>
    );
}
export default Footer;