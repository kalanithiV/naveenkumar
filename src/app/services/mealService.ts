import axios from "axios";

const API_URL = 'https://www.themealdb.com/api/json/v1/1';


export const getMeals = async (query: string) => {
    const response = await axios.get(`${API_URL}/search.php?s=${query}`);
    return response.data.meals || [];
};

export const getMealDetail = async (id: string) => {
    const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
    return response.data.meals ? response.data.meals[0] : null;
};
