import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../services/api";

export default function Recipe() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    getMealById(id).then(setMeal);
  }, [id]);

  if (!meal) return <p>Загрузка...</p>;

  return (
  <div className="container">
    <div className="recipe">
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} />
      <p>{meal.strInstructions}</p>
    </div>
  </div>
);
}