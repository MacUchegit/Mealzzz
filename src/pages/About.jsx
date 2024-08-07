import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css';
import aboutImg1 from '../img/about-us2.jpg';
import aboutImg3 from '../img/about-us-section3.png';
import aboutImg2 from '../img/about-us-section22.png';

const About = () => {
  return (
    <>
      <section className="about-section1 d-none d-md-block">
        <Row>
          <Col className="about-header d-flex justify-content-center align-items-center">
            <h1>About</h1>
          </Col>
        </Row>
      </section>
      <section className="about-section2">
        <Container>
          <Row>
            <Col md={6}>
              <img src={aboutImg2} className="img-fluid fade-in-left" alt="" />
            </Col>
            <Col md={6}>
              <Row className="section2-text">
                <h4 className="my-2 fade-in-up">About This App</h4>
                <h2 className="mt-2 mb-4 fade-in-up">Perfect Meal Planning Made Easy</h2>
                <p className="my-2 fade-in-up">
                  Welcome to our Meal Planner App, your ultimate companion for personalized meal planning.
                  Whether you're looking to bulk up, slim down, or maintain a healthy vegan diet, our app
                  provides a seamless way to customize and organize your daily meals.
                </p>
                <p className="my-2 fade-in-up">
                  With a user-friendly interface and a diverse range of meal options, our app helps you
                  create a meal plan that fits your lifestyle and dietary needs. Enjoy a balanced diet
                  effortlessly with our Meal Planner App!
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-section3 pb-5">
        <Container>
          <Row>
            <Col md={6} className="fade-in-left">
              <Row className="section2-text">
                <h4 className="my-2">Amazing Features</h4>
                <h2 className="mt-2 mb-4">Tailored to Your Needs</h2>
                <Container>
                  <ul>
                    <li className="features-list"><span>Diverse Meal Options: </span>Choose from a variety of
                      meal categories including vegan, weight gain, and weight loss.</li>
                    <li className="features-list"><span>Daily Meal Plans: </span>Generate daily meal plans with
                      delicious recipes for breakfast, lunch, and dinner.</li>
                    <li className="features-list"><span>Calorie Calculation: </span>Easily calculate the total
                      calories for each day to keep track of your nutritional intake.</li>
                  </ul>
                </Container>
              </Row>
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <img src={aboutImg3} className="img-fluid fade-in-right" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="fade-in-down">
  <Container>
    <Row className="py-5">
      <Col md={8} xs={12} className="footer-text">
        <Container>
          <h3>Mealzzz</h3>
          <p>
            Thank you for using our Meal Planner App! <br />
            We are committed to helping you achieve your <br />
            health and wellness goals with ease and convenience. <br />
            Your journey to better health starts here
          </p>
        </Container>
      </Col>
      <Col md={4} xs={12}>
        <Container>
          <h5>Links</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Meal Planner</a></li>
          </ul>
        </Container>
      </Col>
    </Row>
    <div id="footer-divider" className="mx-auto"></div>
    <Row className="copyright-text my-1">
      <Col className="text-center">
        <p>&copy; 2024 Mealzz-App. All rights reserved.</p>
      </Col>
    </Row>
  </Container>
</footer>
    </>
  );
};

export default About;
