import React from 'react';
import { Link } from "react-router-dom";
import "../pages/home.css";
import "./footer.css";

function Footer() {
    const FooterNav = [
        { path: "/privacy-policy", label: "Privacy Policy" },
        { path: "/terms-of-service", label: "Terms of Service" },
        { path: "/contact", label: "Contact Us" }
    ];

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 IDI Inc. All rights reserved.</p>
                <nav>
                    <ul className="footer-nav">
                        {FooterNav.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
