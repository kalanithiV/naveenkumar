/* mealService.ts API call */ 

import axios from "axios";

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getMeals = async (query: string) => {
    try {
        const response = await axios.get(`${API_URL}/search.php?s=${query}`);
        console.log("Service Page (1) Response:", response.data.meals);
        return response.data.meals;
    } catch (error) {
        console.error(error);
        console.log("Catch Error here", error);
        return [];
    }
};

export const getMealDetail = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
        console.log("Service Page (2) Response:", response.data.meals);
        return response.data.meals[0];
    } catch (error) {
        console.error(error);
        console.log("Catch Error here", error);
        return null;
    }
};
