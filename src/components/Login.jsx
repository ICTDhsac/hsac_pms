// src/components/Login.jsx
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert, InputGroup } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import SweetAlertComponent from './SweetAlertComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({
        email: email,
        password: password
    });
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your login logic here
        if (email === 'user@example.com' && password === 'password') {
            alert('Login successful!');
        } else {
            setError('Invalid email or password');
        }
    };

    const handleClick = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('Click Yes')
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    const handleShowAlert = () => {
        setShowAlert(true);
    };

    const handleConfirm = () => {
        setShowAlert(false);
        // alert('Confirmed!');
    };

    const handleCancel = () => {
        setShowAlert(false);
        // alert('Cancelled!');
    };


    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Row>
                <Col className='shadow-lg border rounded p-5'>
                    <h1 className="text-center mb-5">User Login</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor='email'>Email address</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoFocus
                                />
                                <InputGroup.Text><i className="fa-solid fa-envelope"></i></InputGroup.Text>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password ..."
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <InputGroup.Text><i className="fa-solid fa-key"></i></InputGroup.Text>
                            </InputGroup>
                        </Form.Group>

                        <div className="d-flex justify-content-end mt-5">
                            <Button variant="primary" type="submit" >
                                <i className="fa-solid fa-right-to-bracket fa-shake"></i> Login
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
            
            {/* <div className="text-center">
                <Button className="m-5" onClick={handleClick} variant="primary" type="submit"> Confirm Alert Module </Button>
                <Button onClick={handleShowAlert} variant="warning">Show SweetAlert</Button>
            </div>
            <SweetAlertComponent
                show={showAlert}
                title="Are you sure?"
                text="You won't be able to revert this!"
                icon="warning"
                showCancelButton={true}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            /> */}
            
        </Container>
    );
};

export default Login;
