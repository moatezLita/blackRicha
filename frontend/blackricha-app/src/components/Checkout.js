import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Checkout = ({handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" required/>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" required/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="1234 Main St" required/>
            </Form.Group>

            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" required/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" required/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    // Add other countries as needed
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
                Place Order
            </Button>
        </Form>
    );
}

export default Checkout;
