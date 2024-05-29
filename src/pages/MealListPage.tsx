import React, { useEffect, useState } from "react";
import { getMeals } from "../services/mealService";
import SearchBar from "../components/SearchBar";
import MealList from "../components/MealList";
import TopNavBar from "../components/TopNavBar";

const MealListPage: React.FC = () => {
    const [meals, setMeals] = useState<any[]>([]);

    const fetchMeals = async (query: string) => {
        const response = await getMeals(query);
        console.log("MealListPage ----------------- OK:", response);
        setMeals(response);
    };

    useEffect(() => {
        fetchMeals("");
    }, []);

    return (
        <div>
            <TopNavBar />
            <SearchBar onSearch={(query) => fetchMeals(query)} />
            <MealList meals={meals} />
        </div>
    );
};

export default MealListPage;




