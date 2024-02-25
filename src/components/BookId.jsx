import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import books2024  from '../data';
import bookImage from '../bookImage';
import '../App.css'
function BookId() {
    const {id} = useParams();
    const book = books2024.find(book => book.id === Number(id));
    const bookId = bookImage[id];

    return (
        <article id='books-desc-main' key={id}>
            <div>
                <img src={bookId} alt={book ? book.title : 'No se ha encontrado el libro'}/>
            </div>
            <h3>{book ? book.title : 'No se ha encontrado el libro'}</h3>
            <p id='effect-shake'>{book ? book.year : ''}</p>
            <div id='p-container'>
                <p className='p-working-css'>{book ? book.editorial : ''}</p>
                <p className='p-working-css'>{book ? book.price : ''}</p>
                <Link to={book ? book.source : ''}><span className='btn-buying'>COMPRE AQUÍ</span></Link>
                <p className='p-working-css'>{book ? book.description : ''}</p>
            </div>
        </article>
    );
}

export default BookId;