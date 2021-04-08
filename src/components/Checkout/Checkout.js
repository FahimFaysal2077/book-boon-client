import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Checkout.css';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    table: {
    },
}));



function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}





const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const classes = useStyles();
    const { bookId } = useParams({});
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/book/${bookId}`)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [bookId]);

    const result = book.find(bk => bk._id === bookId);

    const rows = [
        createRow(`${result.bookName}`, 1, `${result.price}`)
    ];

    const invoiceSubtotal = subtotal(rows);
    const invoiceTotal = invoiceSubtotal;


    const handleOrderPlaced = () => {
        const orderDetails = { ...loggedInUser, name: book.bookName, price: book.price, orderTime: new Date() };
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully');
                }
            })
    }



    return (
        <div>
            <TableContainer className="table" component={Paper}>
                <Table className={classes.table} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">
                                Description
                        </TableCell>
                            <TableCell align="left">
                                Quantity
                        </TableCell>
                            <TableCell align="left">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.desc}>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell align="left">{row.qty}</TableCell>
                                <TableCell align="left">{ccyFormat(row.price)}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="left">{ccyFormat(invoiceTotal)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Link to={`/orders`}>
                    <Button onClick={handleOrderPlaced} className="btn-2" variant="danger">Checkout</Button>
                </Link>

            </TableContainer>
        </div>


    );
};

export default Checkout;