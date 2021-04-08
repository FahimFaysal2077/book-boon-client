import React, { useEffect, useState } from 'react';


const Orders = () => {
    const [orders, setOrders] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
        <div>
            {
                orders.map(order => <li key={order._id}> Book Name: {order.bookName} Author Name : {order.authorName} Price : {order.price} </li>)
            }
        </div>
    );
};

export default Orders;