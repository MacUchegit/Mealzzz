import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './pages/Navigation'; 
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Menu';
import MealPlanner from './pages/MealPlanner';
import { AuthProvider } from './AuthContext'; // Import the AuthProvider

function App() {
  return (
    <AuthProvider> {/* Wrap your app with AuthProvider */}
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/meal-planner" element={<MealPlanner />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
