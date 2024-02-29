import React from 'react';
import { useState, useEffect } from 'react';
import {CgAdd, CgCloseR} from 'react-icons/cg';
import { FaShoppingBasket } from 'react-icons/fa';
import books2024 from '../data';
import bookImage from '../bookImage';
import { Link } from 'react-router-dom';
import '../App.css'
import AuxNavBar from './AuxNavBar';

function Books() {
    const [clickNumber, setClickNumber] = useState(0);
    const [filteredBooks, setFilteredBooks] = useState([]);
    let [cart, setCart] = useState(0);
    const goToBasket = () => {
        window.location.href = '/cart';
    }
    useEffect(() => {
        localStorage.setItem('clickNumber', JSON.stringify(clickNumber));
        localStorage.setItem('cart', JSON.stringify(cart));
    });
    const filterBtn = () => {
        const selectFilter = document.getElementById('select-filter');
        const filter = selectFilter.options[selectFilter.selectedIndex].value;
        if (filter !== '') {
            const booksFiltered = [...books2024].sort((a, b) => {
                if (filter === 'price') {
                    return a.price.localeCompare(b.price);
                } else if (filter === 'year') {
                    return a.year - b.year
                } else if (filter === 'editorial') {
                    return a.editorial.localeCompare(b.editorial);
                }
            });
            setFilteredBooks(booksFiltered);
        } else {
            setFilteredBooks([]);
        }
    }
    const handleBookClick = (id) => {
        window.location.href = `/books/${id}`;
    }
    const bookItems = books2024.map(({id, title, source, year, editorial, price}) => {
        const bookId = bookImage[id];
        const bookPrice = parseInt(price, 10);
        const handleCart = async () => {
            setClickNumber(clickNumber + 1);
            setCart(cart + bookPrice);
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('clickNumber', JSON.stringify(clickNumber));
        }
        const handleSubtract = async () => {
            await handleCart();
            setClickNumber(clickNumber - 1);
            setCart(cart - bookPrice);
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('clickNumber', JSON.stringify(clickNumber));
        }
        return (
            <li id='book-container-list' key={id} title={title}>
                <div id='book-container'>
                    <div id='img-container-book'>
                        <img src={bookId} alt={title}/>
                    </div>
                    <Link className='link-book-container' to={`/books/${id}`}>{title}</Link>
                    <span className='content-book' id='price-tag'>{price}</span>
                    <span className='content-book'>{year}</span>
                    <span className='content-book'>{editorial}</span>
                    <Link to={source}><span className='btn-buying'>COMPRE AQUÍ</span></Link>
                    <div id='icon-container'>
                        <div className='icons' onClick={handleCart}>
                            <CgAdd/>
                        </div>
                        <div className='icons' onClick={handleSubtract}>
                            <CgCloseR/>
                        </div>
                        <div className='btn-cart icons'>
                            <FaShoppingBasket onClick={goToBasket}/>
                        </div>
                        <div className='btn-cart'>
                            <span>{clickNumber}</span>
                        </div>
                    </div>
                </div>
            </li>
        );
    });
    return (
        <section id='book-container-id'>
            <AuxNavBar/>
            <h3 id='book-main-container'>Libros que podrás encontrar para comprar o descargar vía Amazon Books</h3>
            <div id='filter'>
                <button className='btn-filter' onClick={filterBtn}>Filtrar</button>
                <select id='select-filter' name='filter' className='btn-filter'>
                    <option value=''>Seleccionar</option>
                    <option value='price'>Precio</option>
                    <option value='year'>Año</option>
                    <option value='editorial'>Editorial</option>
                </select>
                {filteredBooks.map((book, index) => (
                    <div key={index}>
                        <h2 onClick={() => handleBookClick(book.id)}>{book.title}</h2>
                    </div>
                ))}
            </div>
            <ul id='div-specific-book'>
                {bookItems.map((bookItem) => (
                    <div>
                        {bookItem}
                    </div>
                ))}
            </ul>
        </section>
    );
}

export default Books;