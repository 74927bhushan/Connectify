import React from "react";
import { Navbar, Nav, Carousel, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Login from "./Login";
import Signup from "./Signup";
// Sample images, replace these with your own images
import image1 from "../assets/images/img1.jpg";
import image2 from "../assets/images/img2.jpg";
import image3 from "../assets/images/img3.jpg";

const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">IACSD-Connect</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Use Link instead of anchor tag */}
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
              <Nav.Link href="#privacy">Privacy</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Image section */}
      <div
        className="image-section"
        style={{ height: "61vh", overflow: "hidden" }}
      >
        <Carousel interval={2000} pause={false} fade={true}>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Content */}
      <Container className="my-5 py-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="text-center">
              <h1>Welcome to IACSD-CONNECT (A Student Management System)</h1>
              <p>IACSD-CONNECT</p>
              <p>
              A student management system is a software application designed to streamline administrative tasks and enhance communication between educational institutions, students, teachers, and parents. It serves as a centralized platform for managing various aspects of student information, including enrollment, attendance, grades, schedules, and more.
              </p>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            {/* Use Link instead of anchor tag */}
            <Link to="/login">
              <Button variant="primary" className="mx-2">
                Login
              </Button>
            </Link>
            {/* Use Link instead of anchor tag */}
            <Link to="/signup">
              <Button variant="success" className="mx-2">
                Sign Up
              </Button>
            </Link>
            <Button variant="danger" className="mx-2">
              Logout
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="my-5">
          <h2>Features</h2>
          {/* Your feature list here */}
        </div>

        <div className="text-center my-5">{/* Your buttons here */}</div>
      </Container>
    </div>
  );
};

export default Homepage;
