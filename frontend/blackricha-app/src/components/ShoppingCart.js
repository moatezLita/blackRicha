import React from 'react';
import { Table, Button } from 'react-bootstrap';

const ShoppingCart = ({cartItems}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((item) => (
                    <tr key={item.product.id}>
                        <td>{item.product.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.product.price}</td>
                        <td><Button variant="danger">Remove</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ShoppingCart;
