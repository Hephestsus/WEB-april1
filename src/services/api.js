import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

export const getMeals = async () => {
  const res = await axios.get(`${API_URL}/search.php?s=`);
  return res.data.meals;
};

export const getMealById = async (id) => {
  const res = await axios.get(`${API_URL}/lookup.php?i=${id}`);
  return res.data.meals[0];
};