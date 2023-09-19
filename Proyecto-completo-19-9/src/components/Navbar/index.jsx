import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import { useCartContext } from '../../context/CartContext';
// import Titulo from '../Titulo/Titulo';
// import {Form, Nav, NavDropdown, Navbar } from "react-bootstrap"

const NavBar = ({children}) => {
//    console.log('render navbar')
    const {cantidadTotal} = useCartContext()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to='/'>React-Bootstrap</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-primary' } to='/category/gorras'>Gorras</NavLink>
                        <NavLink className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to="/category/remeras">Remeras</NavLink>
                        
                    </Nav>
                    <Nav>
                        <Link to='/cart'>
                            {cantidadTotal()} <CartWidget saludo={'hola saludos'} />    
                        </Link>
                        {/* <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                        </Nav.Link> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* { titulo( {titleObject} ) } */}
            {/* <Titulo titulo={titleObject} /> */}
            {children}
        </>
)}

export default NavBar

