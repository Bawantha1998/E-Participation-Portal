import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Parser } from "html-to-react";
import { Box } from "@mui/material";
import { API_BASE_URL } from "../utils/constants";
import { SlArrowRight } from "react-icons/sl";
import Search from "./Search";

export default function PaginationRounded() {
  const [contents, setContents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9; // Number of cards to display per page

  useEffect(() => {
    const fetchAllContents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/content/contentviews`);
        setContents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContents();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = contents.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <>
      <div className="content-topic">
        <ul className="public-style-content-subtopic">
          <li>
            <a href="/">
              Home <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="">
              Participate <SlArrowRight />
            </a>
          </li>
          <li>
            <a href="/ContentViews">
              <b>Public Consultation</b>
            </a>
          </li>
        </ul>
        <h1 className="topic-style-public">Public Consultation</h1>
      </div>
      <br />
      <div>
        <Search />
      </div>
      <br />
      <div className="admin-cards">
        <Row lg={12} style={{ padding: "200px" }}>
          <Col
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {currentCards.map((content) => (
              <Col
                key={content.id}
                lg={4}
                md={6}
                sm={12}
                style={{ marginBottom: "20px" }}
              >
                <Card className="card-cs" style={{height:"100%"}}>
                  <Card.Body>
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
      {/* <Box sty
        // sx={{
        //   ml: 70,
        //   mb: 8,
        //   alignItems: "center",
        // }}
      > */}
      <div style={{ marginLeft: "40%", textAlign: "center", width: "50%" }}>
        <Stack spacing={2}>
          <Pagination
            style={{ marginBottom: "4%" }}
            count={Math.ceil(contents.length / cardsPerPage)}
            variant="outlined"
            shape="rounded"
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
      </div>
      {/* </Box> */}
    </>
  );
}
