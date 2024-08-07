import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Api from '../Api';
import carousel5 from '../img/carousel11.jpg';
import carousel6 from '../img/carousel22.jpg';
import carousel7 from '../img/carousel33.jpg';

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState('Select a Category');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch initial recipes for the default category on component mount
    fetchRecipes('Indian');
  }, []);

  const fetchRecipes = async (category) => {
    setSelectedCategory(category);
    const fetchedRecipes = await Api.fetchRecipesByCategory(category);
    setRecipes(fetchedRecipes);
  };

  return (
    <div>
      <div className="carousel-container">
        <Carousel id="carouselExampleAutoplaying carousel-content">
          <Carousel.Item className="carousel-item active">
            <img src={carousel5} className="d-block w-100" alt="..." />
            <Carousel.Caption className="d-none d-md-block">
              <h1 className="carousel-title">Deliciously Easy Breakfasts</h1>
              <p className="carousel-text text-light">Start your day with our simple and nutritious breakfast recipes.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousel6} className="d-block w-100" alt="..." />
            <Carousel.Caption className="d-none d-md-block">
              <h1 className="carousel-title">Wholesome Lunch Ideas</h1>
              <p className="carousel-text text-light">Discover satisfying and healthy lunch recipes for a midday boost.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={carousel7} className="d-block w-100" alt="..." />
            <Carousel.Caption className="d-none d-md-block">
              <h1 className="carousel-title">Indulgent Dinner Creations</h1>
              <p className="carousel-text text-light">End your day with our mouth-watering and comforting dinner recipes.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className="my-4 categories-header">
        <h2>Categories</h2>
        <Row className="categories-row mx-auto">
          {['Indian', 'European', 'African', 'Latino', 'Japanese', 'American'].map((category, index) => (
            <Col key={index} className="cat-col" onClick={() => fetchRecipes(category)}>
              <div className="categories m-2 mx-auto">
                <h4 className="text-center mt-2"><i className={`fas fa-${category.toLowerCase()}`}></i></h4>
                <p className="text-center">{category}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="mt-md-3 mt-sm-2 mx-auto" id="article-caption">
        <h4 className="my-md-4 my-sm-3">Suggested Recipes for You </h4>
        <h5><span>{selectedCategory}</span></h5>
      </Container>

      <Container>
        <Row className="my-4 my-sm-1">
          {recipes.map((recipe, index) => (
            <Col key={index} lg={3} md={6} className="mx-auto item-container">
              <Card className="item">
                <Card.Img className="item-img mx-auto my-2 img-fluid" src={recipe.image} alt={recipe.label} />
                <Card.Body className="item-text my-2 p-3 mx-auto">
                  <Card.Title className="item-title">{recipe.label}</Card.Title>
                  <Card.Text>
                    <p className="card-text"><span>Calories:</span> {Math.round(recipe.calories)}</p>
                    <p className="card-text"><span>Diet Label:</span> {recipe.dietLabels.length ? recipe.dietLabels.join(', ') : 'No data found'}</p>
                    <p className="card-text"><span>Description:</span> {recipe.healthLabels.slice(0, 10).join(', ')}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="fade-in-down">
      <Container className="pt-5">
          <div id="footer-divider" className="mx-auto"></div>
          <Row className="copyright-text my-1">
            <Col className="text-center">
              <p>&copy; 2024 Mealzz-App. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Recipes;
