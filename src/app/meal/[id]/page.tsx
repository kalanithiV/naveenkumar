import { getMealDetail } from "../../services/mealService";
import TopNavBar from "../../components/TopNavBar";
import styles from "../../styles/Overall.module.css"

interface MealDetailProps {
    params: { id: string };
}

const MealDetail: React.FC<MealDetailProps> = async ({ params }) => {
    const meal = await getMealDetail(params.id);

    if (!meal) return <div>Loading...</div>;

    return (
        <div>
            <TopNavBar />
            <div className={styles.innerHeading}>
                <h1>{meal.strMeal}</h1>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    );
};

export default MealDetail;
