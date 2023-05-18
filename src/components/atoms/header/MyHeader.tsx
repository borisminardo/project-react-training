//atom
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyHeader(prop: any) {
  return (
    <>
      {/*   <Card body> */}
      <div className="header--box">
        <Row className="row-align-center">
          <Col xs md="auto">
            <h4>{prop.text}</h4>
          </Col>
        </Row>
      </div>
      {/* </Card> */}
    </>
  );
}

export default MyHeader;
