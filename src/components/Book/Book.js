import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Book.css';

const Book = (props) => {
    const {image, price, bookName, author, _id} = props.book;
    const bookId = _id;
    console.log(bookId);
    // const history = useHistory();

    // const handleClick = (bookId) => {
    //     const url = `/checkout/${bookId}`;
    //     history.push(url);
    // }
    
    return (
        <div className="row col-md-4 book-card p-4">
            <Card style={{height: '540px'}} className="p-4">
            <Card.Img style={{height: '300px'}} className="p-2" variant="top" src={image} />
                <Card.Body>
                    <div  className="card-title" style={{ width: '300px'}}>
                        <Card.Title style={{ color: 'gray'}}>{bookName}</Card.Title>
                        <Card.Title><span style={{ color: 'orange', fontSize: '25px'}}>Author:</span> {author}</Card.Title>
                        <div>
                        <p style={{fontSize: '25px', fontWeight: '800', color: 'green'}}>{price}</p>
                        <Link to={`/checkout/${bookId}`}>
                             <Button className="" variant="outline-info">Buy Now</Button>
                        </Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Book;