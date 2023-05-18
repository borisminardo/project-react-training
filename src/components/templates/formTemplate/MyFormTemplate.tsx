import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//organisms
import MyZodCustomFormBox from "../../organisms/zodFormBox/MyZodCustomFormBox";

function MyFormTemplate() {
  return (
    <>
      <Container className="content">
        <Row>
          <Col md="auto">
            <MyZodCustomFormBox />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyFormTemplate;
