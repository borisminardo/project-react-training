import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCustomFormBox from "../../organisms/formBox/MyCustomFormBox";
//organisms

function MyFormTemplate() {
  return (
    <>
      <Container className="content">
        <Row>
          <Col md="auto">
            <MyCustomFormBox />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyFormTemplate;
