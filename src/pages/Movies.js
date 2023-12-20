import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuBtn from "../components/MenuBtn";
import PageBtn from "../components/PageBtn";
import MovieBoard from "../components/MovieBoard";
import { useSelector } from "react-redux";

const Movies = () => {
  const { keyword } = useSelector((state) => state.movie);

  return (
    <div>
      <Container>
        <Row>
          <Col
            lg={3}
            className={keyword !== "" ? "disabled" : ""}
          >
            <MenuBtn name="Sort"></MenuBtn>
            <MenuBtn name="Filter"></MenuBtn>
          </Col>
          <Col lg={keyword !== "" ? "" : 9}>
            <MovieBoard></MovieBoard>
          </Col>
        </Row>
        <PageBtn></PageBtn>
      </Container>
    </div>
  );
};

export default Movies;
