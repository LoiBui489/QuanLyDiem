import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand className="mx-3" href="#">Study5</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to={"/"} className="nav-link mx-3">Trang chủ</Link>
                        <Link to={"/login/"} className="nav-link mx-3">Đăng nhập</Link>
                        <Link to={"/logout/"} className="nav-link mx-3">Đăng xuất</Link>
                        <NavDropdown className="mx-3" title="Quản lý thông tin" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex mx-3">
                        <Form.Control
                            type="search"
                            placeholder="Nhập từ khóa"
                            className="me-3"
                            aria-label="search"
                        />
                        <Button  variant="outline-success">Tìm</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;