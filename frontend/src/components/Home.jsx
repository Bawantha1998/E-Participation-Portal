import Carousel from "react-bootstrap/Carousel";
import logo2 from "./../assets/slcricket.jpeg";
import logo3 from "./../assets/colombo-city-tour-desktop-large-1.jpg";
import logonew from "./../assets/new pic.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Parser } from "html-to-react";
import Search from "./Search";
import { API_BASE_URL } from "../utils/constants";

export default function Home() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/content/contents`);
        setContents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="row px-5 py-1">
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <a href="/" style={{ width: "max-content" }}>
                {/* need to include topic */}
                {/* <img className="logo1" src={logo} />  */}
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <div className="input-group w-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* start corousel */}

      <div className="row ">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 c-img"
              src={logo2}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className=" corousel-content">
                <div className="row px-5 py-4 justify-content-lg-end justify-content-md-center">
                  <Card className="card1" style={{ width: "22rem" }}>
                    <Card.Body>
                      <Card.Title>
                        SRI LANKA
                        <br /> MODEL
                        <br /> PARLIAMENT <br /> 2024
                      </Card.Title>
                      <Card.Text>
                        14,15,21 OCTOBER.MAKE YOUR VOICE
                        <br />
                        HEARD EXPERIERIENCE THE RIGOUR OF
                        <br />
                        DEBATING ON NATIONAL ISSUES.
                      </Card.Text>
                      <button className="btn btn-blue">SIGN-UPS CLOSED</button>
                    </Card.Body>
                  </Card>
                </div>

                <h5>SRI LANKA MODEL PARLIAMENT 2024</h5>
                <button className="btn btn-blue">MORE INFO ON SLMP 2024</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 c-img"
              src={logo3}
              alt="Second slide"
            />
            <Carousel.Caption>
              <div className="corousel-content">
                <h4>BUDGET 2024</h4>
                <p>
                  As part of REACH's annual Budget feedback exercise to engage
                  Sri Lankans,we would like to share your views and feedback.
                </p>
                <button className="btn btn-blue">SHARE YOUR VIEWS</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 c-img"
              src={logonew}
              alt="Third slide"
            />
            <Carousel.Caption>
              <div className="corousel-content">
                <h5>We Want Your Feedback on National Policies & Issues!</h5>
                <button className="btn btn-blue">SHARE YOUR VIEWS</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* finished corousel */}
      </div>
      <br />
      <p className="ep-subtopic">
        <b>Public Consultations</b>
      </p>
      {/* <ul style={{listStyle:"none"}}>
        <li>
            <a>public consulatation</a>
        </li>
        <li><a>view all public consulatation</a></li>
        </ul> */}
      <a
        href="/ContentViews"
        className="row px-5 py-3 justify-content-lg-end justify-content-md-center ep-view-contant"
      >
        View All Public Consultations
      </a>
      <hr />
      <Search />
      <br />
      <div className="admin-cards">
        <Row lg={12} style={{ padding: "200px" }}>
          <Col style={{ display: "flex", flexDirection: "row",flexWrap: "wrap" }}>
            {contents.map((content) => (
              <Col
                key={content.id}
                lg={4}
                md={6}
                sm={12}
                style={{ marginBottom: "20px" }}
                // className="card-main"
              >
                <Card className="card-cs" style={{height:"100%"}}>
                  <Card.Body className="fix-card">
                    <Card.Title>
                      <b className="sl-ep-card-content">
                        {content.content_topic}
                      </b>
                    </Card.Title>
                    <img
                      src={`https://stagingicta.lankagate.gov.lk/epart-admin/${content.content_image}`}
                      alt={content.Content_topic}
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                    <Card.Text className="card-body">
                      {new Parser().parse(content.content_short_description)}
                      <Link to={`/participate/${content.content_url}`}>
                        <button className=" btn-blue-submit block-btn">
                          SHARE YOUR VIEWS
                        </button>
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}
