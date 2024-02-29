import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Books from './components/Books';
import NavBar from './components/NavBar';
import GeneralFooter from './components/GeneralFooter';
import BooksId from './components/BookId';
import Cart from './components/Cart';
import { Contact } from './components/Contact';
import './App.css';

function App() {
    return (
        <Router>
            <NavBar/>
            <h1>Armando Di Filippo</h1>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/books/" element={<Books/>}/>
                <Route path="/books/:id" element={<BooksId/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <GeneralFooter/>
        </Router>
    );
}

export default App;