import React from 'react';
import { books2024 } from '../data';
import { Link } from 'react-router-dom';
function AuxNavBar() {
    return (
        <div id='aux-navbar'>
            <ul id='topics-id'>
                {books2024.map(({topic}) => (
                    <li key={topic}>
                        <Link to={`/books/topic/${topic}`}><span>{topic}</span></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AuxNavBar;