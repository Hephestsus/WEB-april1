const CART_KEY = "meals_cart";

// Получить корзину
export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

// Сохранить корзину
export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Добавить блюдо
export const addToCart = (meal) => {
  const cart = getCart();

  // Проверка на дубликат
  const exists = cart.find(item => item.idMeal === meal.idMeal);
  if (!exists) {
    cart.push(meal);
    saveCart(cart);
  }
};

// Удалить блюдо
export const removeFromCart = (id) => {
  const cart = getCart().filter(item => item.idMeal !== id);
  saveCart(cart);
};
