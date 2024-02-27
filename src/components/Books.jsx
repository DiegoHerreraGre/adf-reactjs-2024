import React from 'react';
import {CgAdd, CgCloseR} from 'react-icons/cg';
import { FaShoppingBasket } from 'react-icons/fa';
import books2024 from '../data';
import bookImage from '../bookImage';
import { Link } from 'react-router-dom';
import '../App.css'
import Filter from './Filter';

function Books() {
    const [clickNumber, setClickNumber] = React.useState(0);
    let [cart, setCart] = React.useState(0);
    const goToBasket = () => {
        window.location.href = '/cart';
    }
    const bookItems = books2024.map(({id, title, source, year, editorial, price}) => {
        const bookId = bookImage[id];
        const bookPrice = parseInt(price, 10);
        const handleCart = () => {
            setClickNumber(clickNumber + 1);
            setCart(cart + bookPrice);
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('clickNumber', JSON.stringify(clickNumber));
        }
        const handleSubtract = () => {
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
            <Filter/>
            <h3 id='book-main-container'>Libros que podrás encontrar para comprar o descargar vía Amazon Books</h3>
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