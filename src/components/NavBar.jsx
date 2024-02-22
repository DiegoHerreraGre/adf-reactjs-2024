import React, {useState} from 'react';
import { FaHome, FaBars, FaTeamspeak } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar" onMouseLeave={closeMobileMenu}>
            <h1>Armando Di Filippo</h1>
            <section className="navbar-container-principal">
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaHome/> : <FaBars/>}
                </div>
                <div className="navbar-container">

                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/aboutme' className="nav-links">
                            Sobre mí
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/books' className="nav-links">
                            Libros
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-links">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
}
export default NavBar;