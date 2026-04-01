import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🍽 Recipes</h2>
      <div>
        <Link to="/">Главная</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
    </nav>
  );
}