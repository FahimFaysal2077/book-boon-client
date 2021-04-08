import React, { useEffect, useState } from 'react';


const Orders = () => {
    const [orders, setOrders] = useState()

    useEffect(() => {
        fetch('https://warm-badlands-03887.herokuapp.com/books')
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