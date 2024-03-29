import React from 'react';
import '../App.css'
function Home() {
    return (
        <section id='home-main'>
            <article id='container-art-list'>
                <span id='presentation-home' className='marquee'>Mis temas de trabajo</span>
                <ul>
                    <div id='container-div-list'>
                        <div className='container-list'>
                            <li>Desarrollo económico y social</li>
                        </div>
                        <div className='container-list'>
                            <li>Relaciones Económicas Internacionales</li>
                        </div>
                        <div className='container-list'>
                            <li>Integración Regional</li>
                        </div>
                        <div className='container-list'>
                            <li>Migraciones y Relaciones Laborales</li>
                        </div>
                        <div className='container-list'>
                            <li>Filosofía Económica</li>
                        </div>
                        <div className='container-list'>
                            <li>Licenciado en Ciencias Económicas</li>
                        </div>
                        <div className='container-list'>
                            <li>Magíster en Ciencias Económicas</li>
                        </div>
                        <div className='container-list'>
                            <li>Historia de la economía política y latinoamericana</li>
                        </div>
                    </div>
                </ul>
                <div id='universal-desc'>
                    <h4>Profesor invitado en:</h4>
                    <div className='main-positions-universities'>
                        <p>
                            Stanford University, California, Profesor Invitado (Tinker Visiting Professor) año académico
                            septiembre 2004, junio 2005. Casa Bolivar, Latin American Studies. Los cursos dictados
                            fueron: Latin American Development, Latin
                        </p>
                    </div>
                    <div className='main-positions-universities'>
                        <p>
                            Stanford Overseas Programme (Santiago de Chile), años 2000 a 2007. Cursos dictados: América
                            Latina en la Economía Mundial, y Desarrollo Latinoamericano.
                        </p>
                    </div>
                    <div className='main-positions-universities'>
                        <p>
                            Institute des Hautes Études de L´Amérique Latine, SORBONNE NOUVELLE, PARIS III, año 2001.
                            Distinguido con la Silla Bolivar, durante el segundo período académico de 2001. Dictado un
                            curso de nivel de doctorado sobre el Pensamiento de CEPAL y su impacto sobre las ciencias
                            sociales de América Latina.
                        </p>
                    </div>
                    <div className='main-positions-universities'>
                        <p>
                            Instituto de Estudios Internacionales, UNIVERSIDAD DE CHILE, años 2000 a 2007. Dictados
                            múltiples cursos y seminarios sobre temas relacionados con el Desarrollo y las Relaciones
                            Internacionales de América Latina. Actualmente (2007), soy profesor del Curso Economía
                            Política Global, en el Programa de Magíster en Relaciones Internacionales del Instituto.
                        </p>
                    </div>
                    <div className='main-positions-universities'>
                        <p>
                            Academia Diplomática, Ministerio de Relaciones Exteriores de Chile, Frecuentes
                            colaboraciones académicas.
                        </p>
                    </div>
                    <div className='main-positions-universities'>
                        <p>
                            Universidad Jesuita Alberto Hurtado, años 2000 hasta la actualidad, Profesor Regular en
                            múltiples asignaturas. Actualmente soy profesor en tres diferentes programas de Magíster.
                        </p>
                    </div>
                </div>
            </article>
            <footer id='home-footer-specific'></footer>
        </section>
    );
}

export default Home;