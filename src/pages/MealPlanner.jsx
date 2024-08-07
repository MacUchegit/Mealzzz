import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import '../index.css';
import veganMeals from '../VeganMeals'; // Sample data import
import weightGainMeals from '../WeightGainMeals'; // Sample data import
import weightLossMeals from '../WeightLossMeals'; // Sample data import
import HeroImg from '../img/meal-planner-hero-img.png'; // Sample image import

const MealPlanner = () => {
  const [meals, setMeals] = useState({});
  const [selectedDay, setSelectedDay] = useState('');
  const [mealType, setMealType] = useState('');
  const [totalCalories, setTotalCalories] = useState(null); // Initialize as null

  // Function to generate meals based on selected category
  const generateMeals = (mealData) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const newMeals = {};
    days.forEach(day => {
      newMeals[day] = {
        breakfast: mealData.breakfast[Math.floor(Math.random() * mealData.breakfast.length)],
        lunch: mealData.lunch[Math.floor(Math.random() * mealData.lunch.length)],
        dinner: mealData.dinner[Math.floor(Math.random() * mealData.dinner.length)],
      };
    });
    setMeals(newMeals);
    setSelectedDay('Monday'); // Display meals for Monday initially
    setTotalCalories(null); // Reset total calories display
  };

  // Function to calculate total calories for a selected day
  const calculateTotalCalories = (dayMeals) => {
    let total = 0;
    total += parseInt(dayMeals.breakfast.calories);
    total += parseInt(dayMeals.lunch.calories);
    total += parseInt(dayMeals.dinner.calories);
    return total;
  };

  // Function to handle day selection and update total calories
  const handleDayClick = (day) => {
    setSelectedDay(day);
    setTotalCalories(null); // Reset total calories display
  };

  // Function to handle "Calculate Total Calories" button click
  const handleCalculateTotalCalories = () => {
    if (selectedDay) {
      const total = calculateTotalCalories(meals[selectedDay]);
      setTotalCalories(total);
    }
  };

  // Function to generate vegan meals
  const generateVeganMeals = () => {
    generateMeals(veganMeals); // Replace with actual meal data function
    setMealType('Vegan');
  };

  // Function to generate weight gain meals
  const generateWeightGainMeals = () => {
    generateMeals(weightGainMeals); // Replace with actual meal data function
    setMealType('Weight Gain');
  };

  // Function to generate weight loss meals
  const generateWeightLossMeals = () => {
    generateMeals(weightLossMeals); // Replace with actual meal data function
    setMealType('Weight Loss');
  };

  // Function to display meal type description based on selected category
  const getMealTypeDescription = () => {
    if (mealType === 'Weight Gain') {
      return (
        <>
          <h3 className="text-center" style={{ color: 'rgb(81, 175, 84)' }}>
            Bulk Up with Flavor: Nutritious Weight Gain Meals!
          </h3>
          <p className="text-center my-3">
            Welcome to our robust collection of meals designed for healthy weight gain! Indulge in our hearty and delicious dishes,
            each packed with nutritious ingredients to help you gain weight the right way. Enjoy every bite as you embark on your journey
            to a stronger you.
          </p>
        </>
      );
    } else if (mealType === 'Weight Loss') {
      return (
        <>
          <h3 className="text-center" style={{ color: 'rgb(81, 175, 84)' }}>
            Slim Down Deliciously: Tasty Weight Loss Meals!
          </h3>
          <p className="text-center my-3">
            Welcome to our delightful array of weight loss meals! Savor our carefully curated, low-calorie dishes that are both satisfying
            and nutritious. Each meal is crafted to support your weight loss goals without sacrificing flavor, ensuring you enjoy every
            step of your healthy journey.
          </p>
        </>
      );
    } else {
      return (
        <>
          <h3 className="text-center" style={{ color: 'rgb(81, 175, 84)' }}>
            Deliciously {mealType}: A Feast for Every Meal!
          </h3>
          <p className="text-center my-3">
            Welcome to our vibrant {mealType.toLowerCase()} paradise! Dive into our delicious selection of plant-based dishes,
            perfect for every meal. Each dish is crafted with love, packed with wholesome ingredients, and guaranteed to tantalize
            your taste buds.
          </p>
        </>
      );
    }
  };

  return (
    <div>
      <section className="section1">
        <Container>
          <Row>
            <Col md={7} className="img-col">
              <img
                id="section1-img"
                className="img-fluid mb-0 d-none d-md-block"
                src={HeroImg}
                alt="Meal Planner Hero Image"
              />
            </Col>
            <Col md={5} className="meal-cat-container">
              <div className="meal-cat px-3">
                <div id="meal-cat-title" className="my-lg-5">
                  <h3 className="text-center">Customize Your Perfect Meal Plan</h3>
                </div>
                <div className="meal-cat-item" onClick={generateVeganMeals}>
                  <h4 className="text-center">Vegan</h4>
                </div>
                <div className="meal-cat-item" onClick={generateWeightGainMeals}>
                  <h4 className="text-center">Weight Gain</h4>
                </div>
                <div className="meal-cat-item" onClick={generateWeightLossMeals}>
                  <h4 className="text-center">Weight Loss</h4>
                </div>
                <div className="meal-cat-gen" onClick={handleCalculateTotalCalories}>
                  <h4 className="text-center">Calculate Total Calories</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {selectedDay && (
        <section className="section2">
          <Container>
            <Row>
              <Col className="section1-menu">
                {getMealTypeDescription()}
              </Col>
            </Row>
            <Row className="days-row mt-3">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <Col key={day} xs={2} className="days" onClick={() => handleDayClick(day)}>
                  <h5 className={selectedDay === day ? 'days-h5-active' : 'days-btn'}>{day}</h5>
                </Col>
              ))}
            </Row>
            <div>
              <Row className="my-3">
                <Col className="total-calories">
                  <h3>
                    Total Calories: <span>{totalCalories === null ? 'XXXX' : `${totalCalories} k/cal`}</span>
                  </h3>
                </Col>
              </Row>
            </div>
            <Row>
              <Container>
                {['breakfast', 'lunch', 'dinner'].map((mealType) => (
                  <div key={mealType} className={mealType}>
                    <Row className="mt-2  mt-sm-3 mx-auto" >
                      <Col>
                        <h4 className="mt-0">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h4>
                      </Col>
                    </Row>
                    <Row className="menus-row mt-2 d-flex justify-content-center align-items-center">
                      <Col
                        md={4} lg={3}
                        className="p-3 d-flex justify-content-center align-items-center"
                        id="meal-menu-img-col"
                      >
                        <img src={meals[selectedDay][mealType].image} className="img-fluid" alt={meals[selectedDay][mealType].title} />
                      </Col>
                      <Col md={7} lg={9} className="p-3" id="meal-menu-text-col">
                        <div id="meal-menu-text-title">
                          <h4>{meals[selectedDay][mealType].title}</h4>
                        </div>
                        <div id="meal-menu-text-ingredients">
                          <h5>Ingredients</h5>
                          <p>
                            {meals[selectedDay][mealType].ingredients.join(', ')}
                          </p>
                        </div>
                        <div id="meal-menu-text-calories">
                          <h5>Calories</h5>
                          <p>{meals[selectedDay][mealType].calories} K/Cal</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Container>
            </Row>
          </Container>
        </section>
      )}

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

export default MealPlanner;
