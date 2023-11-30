import { SlArrowRight } from "react-icons/sl";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import logo011 from "./../assets/sri lanka air line image 01.jpg";
import logo022 from "./../assets/sl airlines 2.jpg";
import logo033 from "./../assets/sri lanka air lines 3.jpg";
export default function () {
  return (
    <div className="body-photogallery">
      <div className="content-topic">
        <ul className="public-style-content-subtopic">
          <li>
            <a href="/">
              Home <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="">
              Watch
              <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="/termsofparticipation">
              <b>Photo Gallery</b>{" "}
            </a>
          </li>
        </ul>
        <h1 className="topic-style-public">Photo Gallery</h1>
      </div>
      <br/><br/>
            <div style={{marginLeft:"70px"}}>
            <Row>
          <Col lg={1}>
    
          </Col>
          <Col lg={3}>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo011} />
      <Card.Body>
        <Card.Title><b>Global Sales Conference</b></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button style={{marginLeft:"18%"}} className="btn btn-blue">VIEW GALLERY</button>
      </Card.Body>
    </Card>
          </Col>
          <Col lg={3}>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo022} />
      <Card.Body>
        <Card.Title><b>Post-Budget 2022</b></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button style={{marginLeft:"18%"}}className="btn btn-blue">VIEW GALLERY</button>
      </Card.Body>
    </Card>
          </Col>
          <Col lg={3}>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo033} />
      <Card.Body>
        <Card.Title><b>FTA with Saudi Arabia</b></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button style={{marginLeft:"18%"}}className="btn btn-blue">VIEW GALLERY</button>
      </Card.Body>
    </Card>
          </Col>
          <Col lg={1}>

          </Col>
        </Row>
            </div>
        <br/><br/>
    </div>
  );
}
