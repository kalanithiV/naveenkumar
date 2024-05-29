import React from "react";

interface MealCardProps {
  meal: {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strInstructions: string;
    strMealThumb: string;
  };
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  return (
    <>
    {/* <div className="grid-container">
      <div className="meal-card">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h2>{meal.strMeal}</h2>
        <p>{meal.strCategory}</p>
        <Link to={`/meal/${meal.idMeal}`}>View Details</Link>
      </div>
    </div> */}
    </>
  );
};

export default MealCard;
