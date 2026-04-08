import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../services/cart";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  return (
    <div>
      <h2>Корзина</h2>

      {cart.length === 0 ? (
        <p>Пусто</p>
      ) : (
        cart.map((meal) => (
          <div key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <button onClick={() => handleRemove(meal.idMeal)}>
              Удалить
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
