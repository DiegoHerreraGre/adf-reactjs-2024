import React, { useState, useEffect } from 'react';
import {CgAdd, CgCloseR} from 'react-icons/cg';
import { FaShoppingBasket } from 'react-icons/fa';
import { books2024 } from '../data';
import bookImage from '../bookImage';
import { Link } from 'react-router-dom';
import '../App.css'
import AuxNavBar from './AuxNavBar';

function Books() {
    const [clickNumber, setClickNumber] = useState(0);
    const [filteredBooks, setFilteredBooks] = useState(books2024);
    let [cart, setCart] = useState([]);

    useEffect(() => {
        localStorage.setItem('clickNumber', JSON.stringify(clickNumber));
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [clickNumber, cart]);

    const filterBtn = () => {
        const selectFilter = document.getElementById('select-filter');
        const filter = selectFilter.value;
        if (filter) {
            const booksFiltered = [...books2024].sort((a, b) => {
                if (filter === 'price' || filter === 'year') {
                    return Number(a[filter]) - Number(b[filter]);
                } else {
                    return (a[filter]) - (b[filter]);
                }
            });
            setFilteredBooks(booksFiltered);
        } else {
            setFilteredBooks(books2024);
        }
    }

    const handleBookClick = (id) => {
        window.location.href = `/books/${id}`;
    }

    const handleCart = (bookPrice, bookId) => {
        setClickNumber(prevClickNumber => prevClickNumber + 1);
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === bookId);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { id: bookId, price: bookPrice, quantity: 1 }];
            }
        });
    }

    const handleSubtract = (bookPrice) => {
        clickNumber > 0 ? setClickNumber(clickNumber - 1) : setClickNumber(0);
        if (cart.some(item => item.price === bookPrice === item.quantity > 0)) {
            setCart(prevCart => prevCart.map(item => {
                if (item.price === bookPrice) {
                    return {...item, quantity: item.quantity - 1}
                }
                return item
            }))
        }
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCart(storedCart);
        }
    }, []);

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
                {filteredBooks.map(({id, title, source, year, editorial, price, source2}) => {
                    const bookId = bookImage[id];
                    const bookPrice = parseInt(price, 10);
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
                                <Link to={source}><span className='btn-buying'>Comprar en Amazon Books</span></Link>
                                <Link to={source2}><span className='btn-buying'>Comprar en Editorial</span></Link>
                                <div id='icon-container'>
                                    <div className='icons' onClick={() => handleCart(bookPrice)}>
                                        <CgAdd/>
                                    </div>
                                    <div className='icons' onClick={() => handleSubtract(bookPrice)}>
                                        <CgCloseR/>
                                    </div>
                                    <div className='btn-cart icons'>
                                        <FaShoppingBasket onClick={() => window.location.href = '/cart'}/>
                                    </div>
                                    <div className='btn-cart'>
                                        <span>{clickNumber}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Books;