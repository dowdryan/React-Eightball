import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EightBall from './EightBall';
import BoxesContainer from './ColorBoxes/BoxesContainer'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EightBall/>} />
        <Route path="/ColorBoxes" element={<BoxesContainer/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;