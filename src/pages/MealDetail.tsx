import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealDetail } from '../services/mealService';

const MealDetail: React.FC = () => {
    const { id } = useParams<{ id: any }>();
    const [meal, setMeal] = useState<any>(null);

    useEffect(() => {
        const fetchMealDetail = async () => {
            const data = await getMealDetail(id);
            setMeal(data);
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

