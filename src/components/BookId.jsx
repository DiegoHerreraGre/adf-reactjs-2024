import { useParams } from 'react-router-dom';
import books2024 from '../data';
import '../App.css'
function BookId() {
    const {id} = useParams();
    const book = books2024.find(book => book.id === Number(id));
    return (
        <article id='books-desc-main' key={id}>
            <h3>{book ? book.title : 'No se ha encontrado el libro'}</h3>
            <p id='effect-shake'>{book ? book.year : ''}</p>
            <div id='p-container'>
                <p className='p-working-css'>{book ? book.editorial : ''}</p>
                <p className='p-working-css'>{book ? book.price : ''}</p>
                <p className='p-working-css'>{book ? book.source : ''}</p>
            </div>
        </article>
    );
}

export default BookId;