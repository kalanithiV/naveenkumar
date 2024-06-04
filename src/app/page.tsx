"use client";

import { useEffect, useState } from "react";
import { getMeals } from "./services/mealService";
import { Meal } from "./services/Meal";
import SearchBar from "./components/SearchBar";
import MealList from "./components/MealList";
import TopNavBar from "./components/TopNavBar";
import "./styles/Overall.module.css";
import "./styles/TopNavBar.module.css";

const Home: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  const fetchMeals = async (query: string) => {
    const response = await getMeals(query);
    setMeals(response);
  };

  useEffect(() => {
    fetchMeals("");
  }, []);

  return (
    <div className="listnew">
      <TopNavBar />
      <SearchBar onSearch={(query) => fetchMeals(query)} />
      <MealList meals={meals} />
    </div>
  );
};

export default Home;
