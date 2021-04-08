import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Home.css';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://warm-badlands-03887.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div style={{ backgroundColor: 'rgb(241,241,241,1)', height: '3200px' }}>
            <div className="container">
                <div className="row">
                    {
                        books.map(book => <Book key={book._id} book={book}></Book>)
                    }
                </div>
            </div>    
        </div>
    );
};

export default Home;