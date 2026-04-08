import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav>
      <div>🛒 {cartCount}</div>
    </nav>
  );
}
