import React from 'react';
import books2024 from '../data.js';
import { Link } from 'react-router-dom';
import '../App.css'

function Books() {
    const bookItems = books2024.map(({id, title, source, year, editorial, price}) => {
        return (
            <li key={id} title={title}>
                <div>
                    <Link className='link-book-container' to={`/books/${id}`}>{title}</Link>
                    <span className='content-book' id='price-tag'>{price}</span>
                    <span className='content-book'>{year}</span>
                    <span className='content-book'>{editorial}</span>
                    <Link to={source}><span className='btn-buying'>COMPRE AQUÍ</span></Link>
                </div>
            </li>
        );
    });
    return (
        <section id='book-container-id'>
            <h3 id='book-main-container'>Libros que podrás encontrar para comprar o descargar vía Amazon Books</h3>
            <ul id='div-specific-book'>
                {bookItems}
            </ul>
        </section>
    );
}

export default Books;