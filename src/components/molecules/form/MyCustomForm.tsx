import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//atoms
import MyHeader from "../../atoms/header/MyHeader";
import MyCustomFormBase from "../../atoms/FormBase/MyCustomFormBase";

function MyCustomForm() {
  return (
    <>
      <Container className="container-width">
        <MyHeader text="My form in React"></MyHeader>
        <Row className="row-align-center">
          <Col xs md="auto">
            <MyCustomFormBase></MyCustomFormBase>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyCustomForm;
