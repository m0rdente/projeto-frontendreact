import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "./footer.css";


export function Footer() {

    return (

        <footer className="footer">
            <ul className="social_list">
                <li>
                <FaFacebook />
                </li>
                <li>
                <FaInstagram />
                </li>
                <li>
                <FaGithub />
                </li>
                </ul>
                <p>
                    
                <span>Desensolvido por Priscila Mordente</span>
            </p>
            
        </footer>
    )

}
