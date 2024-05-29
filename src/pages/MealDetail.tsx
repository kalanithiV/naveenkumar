import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealDetail } from '../services/mealService';
import { Meal } from '../services/MyTypes';

const MealDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [meal, setMeal] = useState<Meal | null>(null);

    useEffect(() => {
        const fetchMealDetail = async () => {
            if (id) {
                const data = await getMealDetail(id);
                setMeal(data);
            }
        };

        fetchMealDetail();
    }, [id]);

    if (!meal) return <div>Loading...</div>;

    return (
        <div className='inner_heading'>
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
        </div>
    );
};

export default MealDetail;
