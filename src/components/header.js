import "../pages/home.css"
import { Link } from "react-router-dom";

function Header(){
    console.log("Header rendered");
     // Define navigation links
     const navLinks = [
        { path: "/", label: "Home" },
        { path: "/market", label: "Market Place" },
        { path: "/about", label: "About Us" },
        { path: "/contact", label: "Contact Us" },
        { path: "/login", label: "Login" },
    ];


    return(
        <nav className="nav" id="header">
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>
    </nav>
        
    )
}
export default Header;