import Link from 'next/link';
import React from 'react';
import { Meal } from '../services/Meal';
import styles from "../styles/Overall.module.css"

interface MealListProps {
    meals: Meal[];
}

const MealList: React.FC<MealListProps> = ({ meals }) => {
    return (
        <div className={styles.denoGrid}>
            {meals.map((meal) => (
                <div key={meal.idMeal} className={styles.mealCard}>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h2>{meal.strMeal}</h2>
                    <p>{meal.strCategory}</p>
                    <Link href={`/meal/${meal.idMeal}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default MealList;
