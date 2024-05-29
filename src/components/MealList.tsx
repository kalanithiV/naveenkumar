import React from "react";
import { Link } from "react-router-dom";
import { Meal } from "../services/MyTypes";

interface MealListProps {
    meals: Meal[];
}

const MealList: React.FC<MealListProps> = ({ meals }) => {
    return (
        <div>
            <div className="Deno_grid">
                {meals.map((meal) => (
                    <div key={meal.idMeal} className="meal-card">
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <h2>{meal.strMeal}</h2>
                        <p>{meal.strCategory}</p>
                        <Link to={`/meal/${meal.idMeal}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealList;
