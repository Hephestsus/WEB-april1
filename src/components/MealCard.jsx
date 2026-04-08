import { useNavigate } from "react-router-dom";
// import { addToCart } from "../services/cart";

export default function MealCard({ meal, addToCart }) {
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(meal);
  };

  return (
    <div onClick={() => navigate(`/recipe/${meal.idMeal}`)}>
      <h3>{meal.strMeal}</h3>

      <button onClick={handleAdd}>
        🛒
      </button>
    </div>
  );
}
