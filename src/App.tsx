/* Need to set up routing */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MealListPage from './pages/MealListPage';
import MealDetail from './pages/MealDetail';
import "../src/styles/App.css"

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MealListPage />} />
                <Route path="/meal/:id" element={<MealDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
