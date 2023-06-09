//atom
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyHeader(prop: any) {
  return (
    <>
      <div className="header--box">
        <Row className="row-align-center">
          <Col>
            <h2>{prop.text}</h2>
            <p>{prop.paragraf}</p>
            <hr />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default MyHeader;
