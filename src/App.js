import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Books from './components/Books';
import NavBar from './components/NavBar';
import GeneralFooter from './components/GeneralFooter';
import BooksId from './components/BookId';
import './App.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/books/" element={<Books />}/>
                <Route path="/books/:id" element={<BooksId />} />
            </Routes>
            <GeneralFooter />
        </Router>
    );
}

export default App;