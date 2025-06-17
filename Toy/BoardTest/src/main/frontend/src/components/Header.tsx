import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header: React.FC = () =>{
    return (
        <Navbar bg="dark" variant={"dark"} expand={"lg"}>
            <Container>
                <Navbar.Brand as={Link} to={"/"}>Toy Board</Navbar.Brand>
                <Nav className={"me-auto"}>
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;