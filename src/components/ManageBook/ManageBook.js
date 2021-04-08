import React, { useEffect, useState } from 'react';

const ManageBook = ({book}) => {

    const [manageBook, setManageBook] = useState({});

    useEffect(() => {
        fetch('https://warm-badlands-03887.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setManageBook(data))
    }, [])

    const deleteBook = id => {
        fetch(`https://warm-badlands-03887.herokuapp.com/deleteBook/${id}`, {
            method: 'DELETE',

        })
        .then(res => res.json())
        .then(result => {
            console.log('Product Deleted', result)
        })
        console.log('button clicked', id)
    }
    return (
        <div>
            {
                manageBook.map(mb => <li> Book Name: {mb.bookName} Author Name : {mb.authorName} Price : {mb.price} 
                <button onClick={() => deleteBook(book._id)}>Delete</button></li>)
            }
            
        </div>
    );
};

export default ManageBook;