import React, { useState, useEffect } from 'react';
import { Navbar, Container, Offcanvas, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function NavigationBar() {
    const [show, setShow] = useState(true);
    const [view, setView] = useState(false);
    const [menu, setMenu] = useState(true);

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setMenu(true);
            setShow(false);
            setView(true);
        }
    }, [])

    const exit = () => {
        sessionStorage.clear();
        window.location.href = '/';
    }

    return (
        <div>
            <Navbar bg="secondary" expand={show}>
                <Container fluid>
                    <Navbar.Brand hidden={view} href="/">Home</Navbar.Brand>
                    <Navbar.Brand hidden={show}>Welcome {sessionStorage.getItem('name')}</Navbar.Brand>
                    <Nav.Link hidden={show} onClick={() => exit()} to="/">Log Out</Nav.Link>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/viewCar">Cars</Nav.Link>
                                <Nav.Link href="/registerCar">Create Car</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
