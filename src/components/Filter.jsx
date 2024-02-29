import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

function Filter({books}) {
    function handleBookClick(id) {
        window.location.href = `/books/${id}`;
    }
    const [clickNumber, setClickNumber] = useState(0);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const { topic, state, year, editorial } = useParams();
    useEffect(() => {
        localStorage.setItem('clickNumber', JSON.stringify(clickNumber));
    }, [clickNumber]);
    const filterBtn = () => {
        const selectFilter = document.getElementById('select-filter');
        const filter = selectFilter.options[selectFilter.selectedIndex].value;
        if (filter !== '') {
            const booksFiltered = [...books].sort((a, b) => {
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
    return (
        <div>
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
    )
};

export default Filter;