import { useEffect, useState } from "react";
import { getMeals } from "../services/api";
import MealCard from "../components/MealCard";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMeals().then(setMeals);
  }, []);

  // фильтр
  const filteredMeals = meals.filter(meal =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Блюда</h1>

      {/* 🔍 ПОИСК */}
      <input
        type="text"
        placeholder="Поиск блюда..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="meals-grid">
        {filteredMeals.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}