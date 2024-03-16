import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Books from './components/Books';
import NavBar from './components/NavBar';
import GeneralFooter from './components/GeneralFooter';
import BooksId from './components/BookId';
import Cart from './components/Cart';
import { Contact } from './components/Contact';
import BlogEntry from './components/BlogEntry';
import Auth from './components/Auth';
import './App.css';
import CheckoutPage from "./components/CheckoutPage";

function App() {
    return (
        <Router>
            <NavBar/>
            <div id='hero-init'>
                <h1>Armando Di Filippo</h1>
                <img src='' alt=''/>
            </div>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/books/" element={<Books/>}/>
                <Route path="/books/:id" element={<BooksId/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/blog" element={<BlogEntry/>}/>
                <Route path="/blog/:id" element={<BlogEntry/>}/>
                <Route path='/cart/checkout' element={<CheckoutPage/>}/>
            </Routes>
            <GeneralFooter/>
        </Router>
    );
}

export default App;