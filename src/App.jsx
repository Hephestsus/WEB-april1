import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Contacts from "./pages/Contacts";
import Navbar from "./components/navbar";

function App() {
  const [cart, setCart] = useState([]);

  // загрузка из localStorage
  useEffect(() => {
    const data = localStorage.getItem("meals_cart");
    if (data) setCart(JSON.parse(data));
  }, []);

  // сохранение в localStorage
  useEffect(() => {
    localStorage.setItem("meals_cart", JSON.stringify(cart));
  }, [cart]);

  // добавить блюдо
  const addToCart = (meal) => {
    const exists = cart.find(item => item.idMeal === meal.idMeal);
    if (!exists) {
      setCart([...cart, meal]);
    }
  };

  return (
    <BrowserRouter>
      {/* передаем корзину в navbar */}
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
