import React from 'react';
import {Link} from "react-router-dom";
import { FaFacebook, FaMailBulk } from "react-icons/fa";

function GeneralFooter() {
    const clickFacebook = () => {
        window.open('https://www.facebook.com/armando.difilippo.9', '_blank');
    };
    const clickEmail = () => {
        window.open('mailto:armando.difilippo@gmail.com');
    }
    return (
        <footer>
            <div className="effect" id="effect-1">
                <h3>Armando Di Filippo | Página Web</h3>
                <hr/>
                <p>Todo el contenido encontrado en la siguiente página está autorizado por Armando bajo la responsabilidad de su distribución autorizada. Además, el propietario, llámese Armando Di Filippo, no posee ni autoriza directamente las ofertas y el stock de sus libros que se están vendiendo a través de Editoriales y/o Amazon Libros</p>
            </div>
            <section id="last-footer">
                <div className="box-footer">
                    <h4>Diseño hecho por Diego Herrera Gré℠</h4>
                    <h4>2024 ®</h4>
                </div>
                <div className="box-footer rrss">
                    <ul id='icon-rrss'>
                        <li onClick={clickFacebook}><FaFacebook/>
                            <Link to="https://www.facebook.com/armando.difilippo.9" target="_blank" rel="noreferrer"></Link>
                        </li>
                        <li onClick={clickEmail}><FaMailBulk/></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default GeneralFooter;