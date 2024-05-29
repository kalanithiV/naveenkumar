// /* mealService.ts API call */ 

import axios from "axios";
import { Meal } from "./MyTypes";

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getMeals = async (query: string): Promise<Meal[]> => {
    try {
        const response = await axios.get(`${API_URL}/search.php?s=${query}`);
        console.log("Service Page (1) Response:", response.data.meals);
        return response.data.meals || [];
    } catch (error) {
        console.error(error);
        console.log("Catch Error here", error);
        return [];
    }
};

export const getMealDetail = async (id: string): Promise<Meal | null> => {
    try {
        const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
        console.log("Service Page (2) Response:", response.data.meals);
        return response.data.meals ? response.data.meals[0] : null;
    } catch (error) {
        console.error(error);
        console.log("Catch Error here", error);
        return null;
    }
};