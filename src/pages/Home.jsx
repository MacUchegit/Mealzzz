import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const Home = () => {
  return (
    <div className="section-hero-home">
      <Container className="d-flex justify-content-start align-items-center" style={{ height: '100%' }}>
        <Row className="row-hero-home">
          <Col lg={12} md={10} className="text-md-start text-center" id="hero-home-text">
            <h2 className="py-4">
              Your Ultimate <span>Meal Planner</span>
            </h2>
            <p className="py-4">
              Enjoy personalized meal planning with our app. <br />
              Whether you aim to gain, lose, or maintain weight, we offer tailored meal options. <br />
              Start your balanced lifestyle journey today!
            </p>
            <Link to="/about">
              <Button className="home-btn">
                Learn More
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
