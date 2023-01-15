import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {

  return (
    
    <div className="navbar">
      <div className="links">
        <Link to="/"> Loja </Link>
        <Link to="/contact"> Contato </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
