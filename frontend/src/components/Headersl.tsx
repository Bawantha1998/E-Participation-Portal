import logo from "./../assets/image1.png";
import * as Icon from "react-bootstrap-icons";
import demologo from "./../assets/demologo.png";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import { MdAccountBalance } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import { width } from "@mui/system";

export default function Header() {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };
  return (
    <div className="header-sl">
      <div>
        <div className="row">
          <div className="col">
            <div className="top-row">
              <img className="header1-padding" src={logo} alt="" />
              <p className="header1-padding">
                An Official website of Sri Lanka Government{" "}
                <a href="#" onClick={toggleAccordion}>
                  Here’how you knows
                </a>
                <Accordion activeKey={accordionOpen ? "0" : ""}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Body className="acc-style-1">
                    {/* acc-style-1 */}
                      <ul className="acc-style-2">
                      {/* acc-style-2 */}
                        <img
                          className="usa-banner__icon usa-media-block__img"
                          style={{ width: "40px", marginTop: "-60px" }}
                          src="https://www.usa.gov/themes/custom/usagov/assets/img/icon-dot-gov.svg"
                          role="img"
                          alt=""
                          aria-hidden="true"
                        />
                        <li className="acc-style-3">
                        {/* acc-style-3 */}
                          <p className="new-style-head">
                            <b className="new-style-head">
                              Official Websites use .<a href="">gov.lk</a>
                            </b>
                            <br />A .<b className="new-style-head"><a href="">gov.lk</a></b>{" "}
                            website belongs to an official government
                            organization in
                            <br /> the Sri Lanka.
                          </p>
                        </li>
                        <img
                          className="usa-banner__icon usa-media-block__img"
                          style={{
                            width: "40px",
                            marginTop: "-60px",
                            marginLeft: "80px",
                          }}
                          src="https://www.usa.gov/themes/custom/usagov/assets/img/icon-https.svg"
                          role="img"
                          alt=""
                          aria-hidden="true"
                        />
                        <li className="acc-style-3">
                        {/* acc-style-3 */}
                          <p className="new-style-head">
                            <b className="new-style-head">
                              Secure .gov.lk websites use HTTPS
                            </b>
                            <br />A<b className="new-style-head"> lock</b>{" "}
                            <FaLock /> or
                            <b className="new-style-head"> https:</b> // means
                            you've safely connected to the .gov.lk
                            <br />
                            website. Share sensitive information only on
                            official,secure websites.{" "}
                          </p>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="row px-2 py-2">
          <div className="col-4">
            <div className="d-flex justify-content-center">
              <a href="/" style={{ width: "max-content" }}>
                {/* need to include topic */}
                <img className="demologo" src={demologo} />
              </a>
            </div>
          </div>
          <div className="col-8">
            <div className="d-flex justify-content-center">
              <div className="d-flex justify-content-end w-50">
                <a className="my-2" href="">
                  <button className="btn btn-blue">සිංහල</button>
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="input-group w-50">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <Icon.Search />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className="hr-line" />
        <div className="header2">
          <div className="row">
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="mainmenu">
                <a href="#">Participate</a>
                <ul className="submenu1">
                  <li>
                    <a href="/events">Events</a>
                  </li>
                  {/* <li>
                    <a href="#">Budget 2024</a>
                  </li> */}
                  <li>
                    <a href="/ContentViews">Public Consultation</a>
                  </li>
                  {/* <li>
                    <a href="#">ConnectSL Whatsapp Group</a>
                  </li> */}
                  {/* <li>
                    <a href="#">Sri Lanka Model Parliament 2024</a>
                  </li> */}
                </ul>
              </li>
              <li className="mainmenu">
                <a href="#">Read</a>
                <ul className="submenu1">
                  <li>
                    <a href="/termsofuse">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/termsofparticipation">Terms of Participation</a>
                  </li>
                  <li>
                    <a href="/newspress">News and Press Releases</a>
                  </li>
                </ul>
              </li>
              <li className="mainmenu">
                <a href="#">Watch</a>
                <ul className="submenu1">
                  <li>
                    <a href="/photogallery">Photo Gallery</a>
                  </li>
                </ul>
              </li>
              <li className="mainmenu">
                <a href="#">Who We Are</a>
                <ul className="submenu1">
                  <li>
                    <a href="/about">About ConnectSL</a>
                  </li>
                  <li>
                    <a href="/faqs">FAQs</a>
                  </li>
                  <li>
                    <a href="/usefullinks">Useful Links</a>
                  </li>
                  <li>
                    <a href="/gfeedback">General Feedback</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact US</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
