import { useNavigate } from "react-router-dom";
import { addToCart } from "../services/cart";

export default function MealCard({ meal }) {
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.stopPropagation(); // ❗ чтобы не сработал переход
    addToCart(meal);
  };

  return (
    <div
      className="meal-card"
      onClick={() => navigate(`/recipe/${meal.idMeal}`)}
    >
      <img src={meal.strMealThumb} />
      <h3>{meal.strMeal}</h3>

      <button onClick={handleAdd}>
        В корзину
      </button>
    </div>
  );
}
