import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const searchKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const searchMovie = (event) => {
    event.preventDefault();
    dispatch({
      type: "KEYWORD_SUCCESS",
      payload: { keyword: keyword },
    });
    navigate("/movie");
  };
  return (
    <div>
      <Navbar variant="dark" expand="lg" className="navbar-area">
        <Container fluid>
          <a href="/"><img
            width={150}
            src="https://t1.daumcdn.net/news/202307/28/10asia/20230728120405707lbbg.jpg"
          ></img></a>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="nav-item" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-item" href="/movie">
                Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex search-area" onSubmit={searchMovie}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="search-input"
                aria-label="Search"
                onChange={searchKeyword}
                onClick={() => setKeyword("")}
                value={keyword}
              />
              <Button
                className="search-btn"
                variant="outline-danger"
                type="submit"
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
