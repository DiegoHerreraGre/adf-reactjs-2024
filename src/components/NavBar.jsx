import React, {useState} from 'react';
import { FaHome, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [colorChange, setColorChange] = useState(false);
    const [wordOnNavBar, setWordOnNavBar] = useState(false);

    const handleClick = async () => {
        setWordOnNavBar(true);
        setClick(!click);
        setColorChange(true);
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 10000);
        });
        setWordOnNavBar(false);
        setClick(false);
        setColorChange(false);
    };
    async function MenuDropdown() {
        const [menuDropdown, setMenuDropdown] = useState(false);
        await handleClick();
        const closeMobileMenu = () => setMenuDropdown(false);
    }

    return (
        <nav className={`navbar ${colorChange ? 'navbar-color-change' : ''}`} onMouseLeave={handleClick}>
            <section className="navbar-container-principal">
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaHome/> : <FaBars/>}
                </div>
                {wordOnNavBar && <div className="message"><p>Activaste el efecto secreto</p></div>}
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
                    <li className="nav-item">
                        <Link to='/cart' className="nav-links">
                            Carro de compras
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blog' className="nav-links">
                            Blog
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
}
export default NavBar;