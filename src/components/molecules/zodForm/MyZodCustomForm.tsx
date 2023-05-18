import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//atoms
import MyHeader from "../../atoms/header/MyHeader";
import MyZodCustomFormBase from "../../atoms/zodFormBase/MyZodCustomFormBase";

function MyZodCustomForm() {
  return (
    <>
      <Container className="container-width">
        <MyHeader text="My form in React"></MyHeader>
        <Row className="row-align-center">
          <Col xs md="auto">
            <MyZodCustomFormBase></MyZodCustomFormBase>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyZodCustomForm;
