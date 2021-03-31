import React, { useEffect, useState } from 'react';
import bookData from '../../fakeData/data.json';
import Book from '../Book/Book';
import './Home.css';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        setBooks(bookData)
        console.log(bookData);
    }, [])
    return (
        <div style={{ backgroundColor: 'rgb(241,241,241,1)', height: '3200px' }}>
            <div className="container">
                <div className="row">
                    {
                        books.map(book => <Book book={book}></Book>)
                    }
                </div>
            </div>    
        </div>
    );
};

export default Home;