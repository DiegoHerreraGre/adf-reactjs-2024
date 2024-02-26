import React from 'react';
import {Link} from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function GeneralFooter() {
    return (
        <footer>
            <div className="effect" id="effect-1">
                <h3>Armando Di Filippo | Página Web</h3>
                <hr/>
                <p>Todo el contenido encontrado en la siguiente página está autorizado por Armando bajo la responsabilidad de su distribución autorizada. Además, el propietario, llámese Armando Di Filippo, no posee ni autoriza directamente las ofertas y el stock de sus libros que se están vendiendo a través de Editoriales y/o Amazon Libros</p>
            </div>
            <div className="effect" id="effect-2">
                <Link to="/contact" className="contact-cta">
                    Contacto
                </Link>
            </div>
            <section id="last-footer">
                <div className="box-footer">
                    <h4>Diseño hecho por Diego Herrera Gré℠</h4>
                    <h4>2024 ®</h4>
                </div>
                <div className="box-footer rrss">
                    <ul id='icon-rrss'>
                        <li><FaFacebook/></li>
                        <li><FaInstagram/></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default GeneralFooter;