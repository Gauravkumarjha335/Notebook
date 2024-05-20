import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


// import Avator from 'react-icons'
function IndexNavbar() {

    
   

   


    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Link to='/'><Navbar.Brand to="#" style={{ marginLeft: '70px' }} >Gaurav'blog</Navbar.Brand>
                </Link> 
                <Nav
                    className="me-auto"
                    style={{ maxHeight: '100px', display: 'flex', gap: '35px', alignItems: 'center' }}
                    navbarScroll
                >
                    <Link to='/' ><Nav className='ml-5' style={{ marginLeft: '30px' }} >Home</Nav></Link>

                    <Link to="/about"><Nav className='ml-5' >About</Nav></Link>
                    <Link to="/post"><Nav className='ml-5' >Post</Nav></Link>
                    <Link to='contact'><Nav className='ml-5'>Contact</Nav>
                    </Link>


                    <Form className="d-flex ml-10">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-4"
                            aria-label="Search"
                            style={{ borderRadius: '5px' }}
                        />
                        <Button className='' variant="outline-success">Search</Button>

                    </Form>
                </Nav>
              


         
            </Container >
        </Navbar >
    );
}
export default IndexNavbar;