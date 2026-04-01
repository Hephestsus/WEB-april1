import { useNavigate } from "react-router-dom";

export default function MealCard({ meal }) {
  const navigate = useNavigate();

  return (
    <div className="meal-card" onClick={() => navigate(`/recipe/${meal.idMeal}`)}>
      <img src={meal.strMealThumb} />
      <h3>{meal.strMeal}</h3>
    </div>
  );
}